import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CardLoginService {
  
  constructor(private http:HttpClient) {}

  login(cardNumber:number, cardType:string) {
    // post these details to Backend server
    // If card exists -> return card details
    // If not -> create new card, return new card details
    return this.http.post("../../assets/backend/card-login.php", {cardNumber, cardType})
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
