import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { MainLoginFormComponent } from '../main-login-form/main-login-form.component';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(public dialog:MatDialog, private router:Router) {
    let dialogRef = this.dialog.open(MainLoginFormComponent, {
      width: '500px',
      data: {type:"currentUser"},
      disableClose: true
    })
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.router.navigate(['/main']);
      }
    })
  }

  ngOnInit() {
  }

}
