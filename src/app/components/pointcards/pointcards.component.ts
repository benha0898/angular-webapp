import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatTableDataSource, MatSort, MatSortable } from '@angular/material';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';

import { PointCard } from '../../api/point-card';

//import { EditPCInfoDialog } from '../editPCInfoDialog/editPCInfoDialog.component';
import { ConfirmDialog } from '../confirmDialog/confirmDialog.component';
import { SuccessSnackBar } from '../successSnackBar/successSnackBar.component';

import { PointcardsTableService } from '../../services/pointcards-table.service';

@Component({
  selector: 'app-pointcards',
  templateUrl: './pointcards.component.html',
  styleUrls: ['./pointcards.component.css']
})
export class PointcardsComponent implements OnInit {
  
  pointcards = new MatTableDataSource;
  displayedColumns = ['pcid', 'points', 'name', 'phone', 'actions'];
  pcid:number;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private pointcardsTableService: PointcardsTableService,
  ) { }

  ngOnInit() {
    this.refresh();
    this.sort.sort(<MatSortable>{
      id: "pcid",
      start: "asc"
    });
    this.pointcards.sort = this.sort
  }

  refresh() {
    this.pointcardsTableService.getPCTable(this.pcid).subscribe(res => {
      if (res) {
        this.pointcards = new MatTableDataSource(res);
        this.pointcards.sort = this.sort
      }
    });
  }

  startEdit(pointcard) {
    pointcard.editing = !pointcard.editing;
  }

  editPC(pointcard) {
    pointcard.editing = !pointcard.editing;
    this.pointcardsTableService.editPC(pointcard).subscribe(res => {
      if (res) {this.refresh()};
    })
  }

  deletePC(pcid) {
    this.openConfirmDialog(`Delete Point Card ${pcid}?`).subscribe(res => {
      if (res) {
        this.pointcardsTableService.deletePC(pcid).subscribe(res => {
          if (res) {this.refresh()};
        })
      }
    })
  }

  openConfirmDialog(message:string) {
    let confirmDialogRef = this.dialog.open(ConfirmDialog, {
      width: '400px',
      data: { message:message },
    });

    return confirmDialogRef.afterClosed();
  }

}
