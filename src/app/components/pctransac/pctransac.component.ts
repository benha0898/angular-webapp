import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatTableDataSource, MatSort, MatSortable } from '@angular/material';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';

import { PCTransaction } from '../../api/pcTransaction';

import { ConfirmDialog } from '../confirmDialog/confirmDialog.component';
import { SuccessSnackBar } from '../successSnackBar/successSnackBar.component';

import { LogTableService } from '../../services/log-table.service';


@Component({
  selector: 'app-pctransac',
  templateUrl: './pctransac.component.html',
  styleUrls: ['./pctransac.component.css']
})
export class PCTransacComponent implements OnInit {

  pcTransac = new MatTableDataSource;
  displayedColumns = ['pcid', 'transac', 'amount', 'transac_time', 'undone'];
  date = new Date();

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private logService: LogTableService,
  ) { }

  ngOnInit() {
    this.refresh();
    this.sort.sort(<MatSortable>{
      id: "transac_time",
      start: "desc"
    });
    this.pcTransac.sort = this.sort
  }

  doOver(transac, action:string) {
    this.openConfirmDialog(`${action} this transaction?`).subscribe(res => {
      if (res) {
        this.logService.doOver(transac, 'pointcards', 'points', 'pctransac').subscribe(res => {
          if (res) {this.refresh()};
        });
      }
    });
  }

  openConfirmDialog(message:string) {
    let confirmDialogRef = this.dialog.open(ConfirmDialog, {
      width: '400px',
      data: { message:message },
    });

    return confirmDialogRef.afterClosed();
  }

  refresh() {
    let start = Math.round(this.date.setHours(0,0,0,0)/1000);
    let end = Math.round(this.date.setHours(23,59,59,999)/1000);
    /*
    this.start.setHours(0,0,0,0);
    let end = new Date(this.start);
    end.setHours(23,59,59,999);
    */

    this.logService.getPCTable(start, end).subscribe(res => {
      if (res) {
        this.pcTransac = new MatTableDataSource(res);
        this.pcTransac.sort = this.sort
      }
    });
  }

}