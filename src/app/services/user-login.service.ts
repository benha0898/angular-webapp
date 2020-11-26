import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  constructor(private http:HttpClient, private router:Router) {}

  login(username, password, type) {
    // post these details to Backend server, return user info if correct, or false
    return this.http.post("../../assets/backend/login.php", {username, password})
      .pipe(
        map((res) => {
          if (res[0]) {
            localStorage.setItem(type, res[0].uname);
          }
          return res;
        }),
        catchError(err => this.handleError(err))
      );
  }

  barcode_login(barcode, type) {
    // post these details to Backend server, return user info if correct, or false
    return this.http.post("../../assets/backend/barcode-login.php", {barcode})
      .pipe(
        map((res) => {
          if (res[0]) {
            localStorage.setItem(type, res[0].login_barcode);
          }
          else if (barcode==1234) {
            localStorage.setItem(type, barcode);
          }
          return res;
        }),
        catchError(err => this.handleError(err))
      );
  }

  private handleError(error: any) {
    return throwError(error);
  }

  logoutAdmin() {
    localStorage.removeItem("admin");
    this.router.navigate(["/main"]);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(["/"]);
  }

}
