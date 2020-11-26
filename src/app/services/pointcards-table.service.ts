import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { PointCard } from '../api/point-card';

@Injectable({
  providedIn: 'root'
})
export class PointcardsTableService {

  constructor(private http:HttpClient) { }

  getPCTable(pcid:number): Observable<PointCard[]> {
    let data:Object;
    if (pcid) {
      data = {pcid:pcid};
    }
    else {
      data = {pcid:-1};
    }
    return this.http.post<PointCard[]>("../../assets/backend/pointcards-table.php", data)
      .pipe(
        map((res) => {
          return res;
        }),
        catchError(err => this.handleError(err))
      );
  }

  editPC(pointcard) {
    let data = {pcid:pointcard.pcid, name:pointcard.name, phone:pointcard.phone};
    return this.http.post("../../assets/backend/edit-pointcard.php", data)
      .pipe(
        map(res => {
          return res;
        }),
        catchError(err => this.handleError(err))
      )
  }


  deletePC(pcid:number) {
    let data = {table:'pointcards', id_row:'pcid', id:pcid};
    return this.http.post("../../assets/backend/delete-row.php", data)
      .pipe(
        map(res => {
          return res;
        }),
        catchError(err => this.handleError(err))
      )
  }

  private handleError(error: any) {
    return throwError(error);
  }
}
