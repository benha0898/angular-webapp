import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'amount-input-dialog',
  templateUrl: './amountInputDialog.component.html',
  //styleUrls: ['./amountInputDialog.component.css']
})
export class AmountInputDialog {

    amount:number;

  constructor(
    public dialogRef: MatDialogRef<AmountInputDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    }
  
  cancel() {
    this.dialogRef.close();
  }
  
  enter() {
    this.dialogRef.close(this.amount);
  }

}