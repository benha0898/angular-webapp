import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { UserLoginService } from '../../services/user-login.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginError:boolean = false;

  constructor(
    public dialogRef: MatDialogRef<LoginFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userLogin:UserLoginService) { }

  ngOnInit() {
  }

  login(e) {
    e.preventDefault();
    const username:string = e.target.elements[0].value;
    const password:string = e.target.elements[1].value;

    this.userLogin.login(username, password, this.data.type).subscribe(data => {
      if (data[0]) {
        this.loginError = false;
        this.dialogRef.close(true);
      }
      else {
        this.loginError = true;
      }
    });
  }



}
