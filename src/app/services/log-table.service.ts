import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { PCTransaction } from '../api/pcTransaction';
import { GCTransaction } from '../api/gcTransaction';

@Injectable({
  providedIn: 'root'
})
export class LogTableService {

  constructor(private http:HttpClient) { }

  getPCTable(start:number, end:number): Observable<PCTransaction[]> {
    let data = {table:"pctransac", start:start, end:end};
    return this.http.post<PCTransaction[]>("../../assets/backend/log-table.php", data)
      .pipe(
        map((res) => {
          /*
          if (res) {
            res.forEach(function(value, index, theArray) {
              theArray[index].transac_time = new Date(theArray[index].transac_time);
            });
          }
          */
          return res;
        }),
        catchError(err => this.handleError(err))
      );
  }

  getGCTable(start:number, end:number): Observable<GCTransaction[]> {
    let data = {table:"gctransac", start:start, end:end};
    return this.http.post<GCTransaction[]>("../../assets/backend/log-table.php", data)
      .pipe(
        map((res) => {
          /*
          if (res) {
            res.forEach(function(value, index, theArray) {
              theArray[index].transac_time = new Date(theArray[index].transac_time);
            });
          }
          */
          return res;
        }),
        catchError(err => this.handleError(err))
      );
  }

  doOver(transac, cardTable, column, transacTable) {
    let data = {transac, cardTable, column, transacTable};
    return this.http.post("../../assets/backend/undo-redo.php", data)
      .pipe(
        map((res) => {
          return res;
        }),
        catchError(err => this.handleError(err))
      );
  }

  private handleError(error: any) {
    return throwError(error);
  }
}
