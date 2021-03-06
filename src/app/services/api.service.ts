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

  getEmployeeDetails(empId: string): Observable<any> {
    console.log('Calling API for details for employee id ' + empId);
    return this.http.get<any>(this.ROOT_URL + empId)
    .pipe (
      catchError(this.handleError)
    )
  }

  recordWork(empId: string, workDays: number): Observable<any> {
    console.log('Calling API for recording work for employee. Id: ' + empId + '. Work days: ' + workDays);
    return this.http.get<any>(this.ROOT_URL + 'recordWork/' + empId + '/' + workDays)
    .pipe (
      catchError(this.handleError)
    )
  }  

  takeVacation(empId: string, vacationDays: number): Observable<any> {
    console.log('Calling API for recording work for employee. Id: ' + empId + '. Vacation days: ' + vacationDays);
    return this.http.get<any>(this.ROOT_URL + 'takeVacation/' + empId + '/' + vacationDays)
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
