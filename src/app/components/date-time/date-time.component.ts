import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css']
})
export class DateTimeComponent implements OnInit {
  public now = new Date();

  constructor() {
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  }

  ngOnInit() {
  }

}
