import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { CardInputDialog } from '../cardInputDialog/cardInputDialog.component';
import { CardMenuDialog } from '../cardMenuDialog/cardMenuDialog.component';
import { LoginFormComponent } from '../login-form/login-form.component';
import { UserLoginService } from '../../services/user-login.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

  constructor(public dialog:MatDialog, private userLogin:UserLoginService, private router:Router) {}

  ngOnInit() {
  }

  openCardDialog(card:String) {
    let dialogRef = this.dialog.open(CardInputDialog, {
      width: '350px',
      data: { cardType: card }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Card Input Dialog was closed.");
      console.log(result);
      if (result) {
        this.openCardMenuDialog(card, result);
      }
    });
  }

  openCardMenuDialog(card, cardData) {
    // console.log("Card Menu Dialog for ", card, " opens with ", cardData);
    let dialogRef = this.dialog.open(CardMenuDialog, {
      width: '700px', height: '400px',
      data: { cardType:card, cardData:cardData },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Card Menu Dialog was closed.");
    });
  }

  adminLogin() {
    let dialogRef = this.dialog.open(LoginFormComponent, {
      width: '700px',
      data: {type:"admin"}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['/admin']);
      }
    });
  }

  logout() {
    this.userLogin.logout();
  }

}