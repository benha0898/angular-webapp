import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CardTransacService {
  
  constructor(private http:HttpClient) {}

  transac(transac:string, table:string, column:string, value:number, idcolumn:string, id:number) {
    // post these details to Backend server
    // update value of card, record in log table
    // return true if successful, false if failed.
    let data = {transac, table, column, value, idcolumn, id};
    return this.http.post("../../assets/backend/card-transac.php", data)
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