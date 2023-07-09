import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Department } from 'src/app/Models/Department';
import { Employee } from 'src/app/Models/Employee';
import { DepartmentAndEmployeeManagementModuleService } from 'src/app/Services/DepartmentAndEmployeeManagementModuleService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {  
  
  constructor(private _service: DepartmentAndEmployeeManagementModuleService) { }

  public employees: Employee[] = [];
  public departments: Department[] = [];
  public currentEmployeeId!: Guid;
  public newFio: string = "";

  ngOnInit() {
    this._service.getAllEmployees()
    .subscribe(response => {
        this.employees = response;
      }
    );

    this._service.getAllDepartments()
    .subscribe(response => {
      this.departments = response;
    })
  }

  action(employeeId: Guid, employeeFio: string) {
    this.currentEmployeeId = employeeId;
    this.newFio = employeeFio;
  }

  findEmployeeFio(employeeId: Guid) : string {
    return this.employees.find((x) => x.id == employeeId)?.fio!;
  }

  updateEmployee() {
    if (this.newFio == "") {
      alert("Empty input!");
      return;
    }

    this._service.updateEmployeeFio(this.currentEmployeeId, this.newFio)
    .subscribe(response => {
        let updatedIndex = this.employees.indexOf(this.employees.find((x) => x.id == this.currentEmployeeId)!);
        this.employees[updatedIndex] = response;
      }
    );
  }
}