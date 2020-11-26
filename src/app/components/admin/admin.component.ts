import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { UserLoginService } from '../../services/user-login.service';
import { PCTransacComponent } from '../pctransac/pctransac.component';
import { GCTransacComponent } from '../gctransac/gctransac.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  currentMenu:string;

  constructor(private userLogin:UserLoginService, private router:Router, public dialog: MatDialog) { }

  ngOnInit() {
  }

  navigate(menu:string) {
    this.currentMenu=menu;
  }

  toMain() {
    this.userLogin.logoutAdmin();
  }

  logout() {
    this.userLogin.logout();
  }

}
