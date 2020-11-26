import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

import { SuccessSnackBar } from '../successSnackBar/successSnackBar.component';
import { EditAccountDialog } from '../editAccountDialog/editAccountDialog.component';
import { CreateAccountDialog } from '../createAccountDialog/createAccountDialog.component';
import { AccountsService } from '../../services/accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  username:string;
  password:string;

  constructor(
    private accountsService: AccountsService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar)
  {
    this.username = localStorage.admin;
  }

  ngOnInit() {
  }

  editAccount() {
    let dialogRef = this.dialog.open(EditAccountDialog, {
      width: '500px'
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.snackBar.openFromComponent(SuccessSnackBar, {
          duration: 500,
          data: {message:result},
          verticalPosition: 'top'
        });
      }
    })
  }

  createAccount() {
    let dialogRef = this.dialog.open(CreateAccountDialog, {
      width: '500px'
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.snackBar.openFromComponent(SuccessSnackBar, {
          duration: 500,
          data: {message:result},
          verticalPosition: 'top'
        });
      }
    })
  }

}