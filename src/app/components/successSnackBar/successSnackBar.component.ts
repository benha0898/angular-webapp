import { Component, Inject } from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material';

@Component({
  selector: 'success-snack-bar',
  templateUrl: './successSnackBar.component.html',
  //styleUrls: ['./cardInputDialog.component.css']
})
export class SuccessSnackBar {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}
  
}