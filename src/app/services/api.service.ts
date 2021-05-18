import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

export interface Employee {
  empId: string,
  workDays: number,
  vacationdays: number
}


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  employee: Employee | undefined; 
  ROOT_URL = 'http://localhost:8080/api/employee/';
  
  constructor(
    private http: HttpClient
  ) { }

  callApi(empId: string): any {

    console.log('Calling API from service for employee ' + empId);

    this.http.get<Employee>(this.ROOT_URL + empId)
    .subscribe((data: Employee) => {
      console.log('Response received: ' + JSON.stringify(data));
      this.employee = { ...data };
      console.log('Response received for emp id ' + this.employee.empId + ' - ' + JSON.stringify(this.employee));
      return this.employee;
    });

  }
}
