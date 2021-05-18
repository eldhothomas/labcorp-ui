import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ApiService {


  ROOT_URL = 'http://localhost:8080/api/employee/';
  
  constructor(
    private http: HttpClient
  ) { }

  callApi(empId: string): Observable<any> {

    console.log('Calling API from service for employee ' + empId);

    return this.http.get<any>(this.ROOT_URL + empId)
    .pipe (
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
