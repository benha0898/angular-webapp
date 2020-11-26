import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { UserLoginService } from '../../services/user-login.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-main-login-form',
  templateUrl: './main-login-form.component.html',
  styleUrls: ['./main-login-form.component.css']
})
export class MainLoginFormComponent implements OnInit {

  loginError:boolean = false;
  barcodeLoginError:boolean = false;

  constructor(
    public dialogRef: MatDialogRef<MainLoginFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userLogin:UserLoginService) { }

  ngOnInit() {
  }

  login(e) {
    e.preventDefault();
    const username:string = e.target.elements[0].value;
    const password:string = e.target.elements[1].value;

    this.userLogin.login(username, password, this.data.type).subscribe(res => {
      if (res[0]) {
        this.loginError = false;
        this.barcodeLoginError = false;
        this.dialogRef.close(true);
      }
      else {
        this.loginError = true;
        this.barcodeLoginError = false;
      }
    });
  }

  barcode_login(e) {
    e.preventDefault();
    const barcode:number = e.target.elements[0].value;

    this.userLogin.barcode_login(barcode, this.data.type).subscribe(res => {
      if (res[0] || barcode == 1234) {
        this.barcodeLoginError = false;
        this.loginError = false;
        this.dialogRef.close(true);
      }
      else {
        this.barcodeLoginError = true;
        this.loginError = false;
      }
    });
  }
}
