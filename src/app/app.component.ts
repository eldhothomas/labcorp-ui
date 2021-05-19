import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

export interface Employee {
  empId: string,
  workDays: number,
  vacationDays: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'labcorp-ui';
  public formEmpId : string = '';
  public formWorkDays : number = 0;
  public formVacationDays : number = 0;
  employee: Employee | undefined;
  constructor (
    private apiService: ApiService,
  ) { }

  getEmployee(empInfo1: any): any {
    console.log("Calling service to get Employee details. Id: " + empInfo1.empId);
    this.apiService.getEmployeeDetails(empInfo1.empId)
    .subscribe (
      (data: Employee) => {
        this.employee  = { ...data };
        console.log('Return JSON for emp id ' +  this.employee?.empId + JSON.stringify(this.employee));
        this.formEmpId = this.employee?.empId;
        this.formWorkDays = this.employee?.workDays;
        this.formVacationDays = this.employee?.vacationDays;
      }
      )
  }

  recordWork(empInfo2: any): any {
    console.log("Calling service to record work. Id: " + empInfo2.empId + ". Work days: " + empInfo2.workDays);
    this.apiService.recordWork(empInfo2.empId, empInfo2.workDays)
    .subscribe (
      (data: Employee) => {
        this.employee  = { ...data };
        console.log('Return JSON for emp id ' +  this.employee?.empId + JSON.stringify(this.employee));
        this.formEmpId = this.employee?.empId;
        this.formWorkDays = this.employee?.workDays;
        this.formVacationDays = this.employee?.vacationDays;

      }
      )
  }

  takeVacation(empInfo3: any): any {
    console.log("Calling service to take vacation. Id: " + empInfo3.empId + ". Vacation days: " + empInfo3.vacationdays);
    this.apiService.takeVacation(empInfo3.empId, empInfo3.vacationDays)
    .subscribe (
      (data: Employee) => {
        this.employee  = { ...data };
        console.log('Return JSON for emp id ' +  this.employee?.empId + JSON.stringify(this.employee));
        this.formEmpId = this.employee?.empId;
        this.formWorkDays = this.employee?.workDays;
        this.formVacationDays = this.employee?.vacationDays;

      }
      )
  }

  ngOnInit() {}
}
