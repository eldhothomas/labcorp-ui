import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


export interface Employee {
  empId: string,
  workDays: number,
  vacationdays: number
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'labcorp-ui';
  employee: Employee | undefined;
  constructor (
    private apiService: ApiService,
  ) { }

  getEmployee(): any {
    console.log("Calling API from component");
    this.apiService.callApi('H001')
    .subscribe (
      (data: Employee) => this.employee  = { ...data }
    )
    console.log('Return JSON for emp id ' +  this.employee?.empId + JSON.stringify(this.employee));
  }

  ngOnInit() {}
}
