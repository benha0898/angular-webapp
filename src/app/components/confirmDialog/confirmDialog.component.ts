import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
    selector: 'confirm-dialog',
    templateUrl: './confirmDialog.component.html',
    //styleUrls: ['./confirmDialog.component.css']
})
export class ConfirmDialog {

    constructor(public dialogRef: MatDialogRef<ConfirmDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) {}

    confirm(bool:boolean) {
        this.dialogRef.close(bool);
    }
}