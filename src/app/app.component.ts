import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'labcorp-ui';
  employee: any;
  constructor (
    private apiService: ApiService,
  ) { }

  getEmployee() {
    console.log("Calling API from component");
    this.employee = this.apiService.callApi('H001')
    console.log('Return JSON: ' + JSON.stringify(this.employee));
  }

  ngOnInit() {}
}
