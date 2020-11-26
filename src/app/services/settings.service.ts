import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http:HttpClient) { }

  getSettings() {
    return this.http.post("../../assets/backend/settings.php", {})
      .pipe(
        map((res) => {
          return res[0];
        }),
        catchError(err => this.handleError(err))
      );
  }

  setSetting(setting:string, amount:number) {
    let data = {setting:setting, amount:amount};
    return this.http.post("../../assets/backend/settings.php", data)
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
