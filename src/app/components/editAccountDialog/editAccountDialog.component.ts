import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AccountsService } from '../../services/accounts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'edit-account-dialog',
  templateUrl: './editAccountDialog.component.html',
  styleUrls: ['./editAccountDialog.component.css']
})
export class EditAccountDialog {

  error:boolean;
  errorMessage:string;

  old_uname:string;
  old_password:string;
  new_uname:string;
  new_password:string;

  constructor(
    public dialogRef: MatDialogRef<EditAccountDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private accountsService:AccountsService) {}
  
  onNoClick() {
    this.dialogRef.close();
  }
  
  enter() {
    if (!this.new_uname && !this.new_password) {
        this.error = true;
        this.errorMessage = "Please enter new username or new password!";
    }
    else {
        this.error = false;
        if (!this.new_uname) {
            this.new_uname = this.old_uname;
        }
        if (!this.new_password) {
            this.new_password = this.old_password;
        }
        this.accountsService.editAccount(this.old_uname,this.old_password,this.new_uname,this.new_password).subscribe(res => {
            if (!res.success) {
                this.error = true;
                this.errorMessage = res.message;
            }
            else {
                this.dialogRef.close(res.message);
            }
        });
    }

  }

  cancel() {
    this.dialogRef.close();
  }

}