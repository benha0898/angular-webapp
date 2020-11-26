import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

import { ConfirmDialog } from '../confirmDialog/confirmDialog.component';
import { AmountInputDialog } from '../amountInputDialog/amountInputDialog.component';
import { SuccessSnackBar } from '../successSnackBar/successSnackBar.component';
import { ErrorSnackBar } from '../errorSnackBar/errorSnackBar.component';

import { CardTransacService } from '../../services/card-transac.service';

@Component({
  selector: 'card-menu-dialog',
  templateUrl: './cardMenuDialog.component.html',
  styleUrls: ['./cardMenuDialog.component.css'],
})
export class CardMenuDialog {

  disableAddPoint:boolean;
  disableRedeem:boolean;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<CardMenuDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any, // data = [cardType,cardData]
    private transac: CardTransacService,
    public snackBar: MatSnackBar) {
      if (this.data.cardType=="Point Card") {
        this.disableRedeem = parseInt(this.data.cardData[0].points)<parseInt(this.data.cardData[1][0].redeem); 
      }
  }

  openConfirmDialog(message:string) {

    let confirmDialogRef = this.dialog.open(ConfirmDialog, {
      width: '400px',
      data: { message:message },
    });

    return confirmDialogRef.afterClosed();
  }

  openAmountInputDialog(action:string) {
    let amountInputDialogRef = this.dialog.open(AmountInputDialog, {
      width: '300px',
      data: { action:action },
    });

    return amountInputDialogRef.afterClosed();
  }

  onNoClick() {
    this.dialogRef.close();
  }
  
  addPC(pcid:number) {
    let addPoint:number = parseInt(this.data.cardData[1][0].addPoint);
    this.openConfirmDialog(`Add ${addPoint} point to Point Card?`).subscribe(res => {
      if (res) {
        // transac(transac, table, column, value, idcolumn, id)
        this.transac.transac("add", "pointcards", "points", addPoint, "pcid", pcid).subscribe(res => {
          if (res) {
            this.snackBar.openFromComponent(SuccessSnackBar, {
              duration: 500,
              data: {message:"Point Successfully Added!"},
              verticalPosition: 'top'
            });
            this.data.cardData[0].points = parseInt(this.data.cardData[0].points) + addPoint;
            this.disableAddPoint = true;
            this.disableRedeem = parseInt(this.data.cardData[0].points)<parseInt(this.data.cardData[1][0].redeem);
          }
        });
      }
    });
    
  }

  redeemPC(pcid:number) {
    let redeem:number = parseInt(this.data.cardData[1][0].redeem);
    if (redeem > this.data.cardData[0].points) {
      this.snackBar.openFromComponent(ErrorSnackBar, {
        duration: 1000,
        data: {message:"Not enough points to redeem!"},
        verticalPosition: 'top',
        panelClass: ['error-snack-bar-color'],
      });
      return;
    }
    this.openConfirmDialog(`Redeem ${redeem} points from Point Card?`).subscribe(res => {
      if (res) {
        // transac(transac, table, column, value, idcolumn, id)
        this.transac.transac("redeem", "pointcards", "points", -redeem, "pcid", pcid).subscribe(res => {
          if (res) {
            this.snackBar.openFromComponent(SuccessSnackBar, {
              duration: 500,
              data: {message:"Transaction Successful!"},
              verticalPosition: 'top',
              panelClass: ["success-snack-bar-color"],
            });
            this.data.cardData[0].points = parseInt(this.data.cardData[0].points) - redeem;
            this.disableRedeem = parseInt(this.data.cardData[0].points)<parseInt(this.data.cardData[1][0].redeem);
          }
        });
      }
    });
    
  }

  loadGC(gcid:number) {
    this.openAmountInputDialog("Load").subscribe(amount => {
      if (amount) {
        this.openConfirmDialog(`Load $${amount} to Gift Card?`).subscribe(res => {
          if (res) {
            // transac(transac, table, column, value, idcolumn, id)
            this.transac.transac("load", "giftcards", "balance", amount, "gcid", gcid).subscribe(res => {
              if (res) {
                this.snackBar.openFromComponent(SuccessSnackBar, {
                  duration: 500,
                  data: {message:"Gift Card Successfully Loaded!"},
                  verticalPosition: 'top',
                  panelClass: ["success-snack-bar-color"],
                });
                this.data.cardData[0].balance = parseInt(this.data.cardData[0].balance) + amount;
              }
            });
          }
        });
      }
      else {
        return;
      }
    });
  }

  payGC(gcid:number) {
    this.openAmountInputDialog("Pay").subscribe(amount => {
      if (amount) {
        if (amount > this.data.cardData[0].balance) {
          this.snackBar.openFromComponent(ErrorSnackBar, {
            duration: 1000,
            data: {message:"Not enough balance to pay!"},
            verticalPosition: 'top',
            panelClass: ['error-snack-bar-color'],
          });
          return;
        }
        this.openConfirmDialog(`Pay $${amount} from Gift Card?`).subscribe(res => {
          if (res) {
            // transac(transac, table, column, value, idcolumn, id)
            this.transac.transac("pay", "giftcards", "balance", -amount, "gcid", gcid).subscribe(res => {
              if (res) {
                this.snackBar.openFromComponent(SuccessSnackBar, {
                  duration: 500,
                  data: {message:"Gift Card Payment Successful!"},
                  verticalPosition: 'top',
                  panelClass: ["success-snack-bar-color"],
                });
                this.data.cardData[0].balance = parseInt(this.data.cardData[0].balance) - amount;
              }
            });
          }
        });
      }
      else {
        return;
      }
    });
  }

}