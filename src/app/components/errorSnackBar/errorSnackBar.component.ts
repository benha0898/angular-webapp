import { Component, Inject } from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material';

@Component({
  selector: 'error-snack-bar',
  templateUrl: './errorSnackBar.component.html',
  styles: [],
})
export class ErrorSnackBar {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}
  
}