import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { AmountInputDialog } from '../amountInputDialog/amountInputDialog.component';

import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  addPoint:number;
  redeem:number;
  login_barcode:number;

  constructor(private settingsService: SettingsService, public dialog: MatDialog) {
    this.settingsService.getSettings().subscribe(res => {
      this.addPoint = res['addPoint'];
      this.redeem = res['redeem'];
      this.login_barcode = res['login_barcode'];
    })
  }

  ngOnInit() {
  }

  openAmountInputDialog(action:string) {
    let amountInputDialogRef = this.dialog.open(AmountInputDialog, {
      width: '300px',
      data: { action:action },
    });

    return amountInputDialogRef.afterClosed();
  }

  input(setting:string) {
    this.openAmountInputDialog("Load").subscribe(amount => {
      if (amount) {
        this.settingsService.setSetting(setting, amount).subscribe(res => {
          if (res) {
            if (setting=="addPoint") {this.addPoint=amount}
            else if (setting =="redeem") {this.redeem=amount}
            else {this.login_barcode=amount}
          }
        })
      }
    });
  }

}
