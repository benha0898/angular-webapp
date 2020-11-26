import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Response } from '../api/response';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http:HttpClient) { }

  editAccount(old_uname, old_password, new_uname, new_password): Observable<Response> {
    const data = {old_uname, old_password, new_uname, new_password};
    return this.http.post<Response>("../../assets/backend/edit-account.php", data)
      .pipe(
        map((res) => {
          if (res) {
            return res;
          }
        }),
        catchError(err => this.handleError(err))
      );
  }

  createAccount(uname, password): Observable<Response> {
    const data = {uname, password};
    return this.http.post<Response>("../../assets/backend/create-account.php", data)
      .pipe(
        map((res) => {
          if (res) {
            return res;
          }
        }),
        catchError(err => this.handleError(err))
      );
  }

  private handleError(error: any) {
    return throwError(error);
  }

}
