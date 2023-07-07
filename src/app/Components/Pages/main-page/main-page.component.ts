import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/Employee';
import { DepartmentAndEmployeeManagementModuleService } from 'src/app/Services/DepartmentAndEmployeeManagementModuleService';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private _service: DepartmentAndEmployeeManagementModuleService) { }

  public employees: Employee[] = [];
  ngOnInit() {
    this._service.getAllEmployees()
    .subscribe(response => {
        this.employees = response;
      }
    );
  }
}