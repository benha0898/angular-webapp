import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AccountsService } from '../../services/accounts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'create-account-dialog',
  templateUrl: './createAccountDialog.component.html',
  styleUrls: ['./createAccountDialog.component.css']
})
export class CreateAccountDialog {

  error:boolean;
  errorMessage:string;

  uname:string;
  password:string;
  
  constructor(
    public dialogRef: MatDialogRef<CreateAccountDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private accountsService:AccountsService) {}
  
  onNoClick() {
    this.dialogRef.close();
  }
  
  enter() {
    this.accountsService.createAccount(this.uname,this.password).subscribe(res => {
        if (!res.success) {
            this.error = true;
            this.errorMessage = res.message;
        }
        else {
            this.dialogRef.close(res.message);
        }
    });

  }

  cancel() {
    this.dialogRef.close();
  }

}