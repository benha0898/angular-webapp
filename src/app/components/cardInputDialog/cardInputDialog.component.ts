import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CardLoginService } from '../../services/card-login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'card-input-dialog',
  templateUrl: './cardInputDialog.component.html',
  //styleUrls: ['./cardInputDialog.component.css']
})
export class CardInputDialog {

  cardNumber:number;

  constructor(
    public dialogRef: MatDialogRef<CardInputDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cardLogin:CardLoginService) {}
  
  onNoClick() {
    this.dialogRef.close();
  }
  
  login(cardType:string) {
    this.cardLogin.login(this.cardNumber, cardType).subscribe(res => {
      this.dialogRef.close(res); //res[0] contains card info, res[1] contains PC settings
    });
  }

}