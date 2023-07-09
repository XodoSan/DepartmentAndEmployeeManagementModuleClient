import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Employee } from "../Models/Employee";
import { environment } from "src/environments/environment";
import { Department } from "../Models/Department";
import { Guid } from "guid-typescript";

@Injectable({
    providedIn: 'root',
})
export class DepartmentAndEmployeeManagementModuleService {
    private _http: HttpClient;

    constructor(http: HttpClient) {
        this._http = http;
    }

    public getAllEmployees() {
        return this._http.get<Employee[]>
            (environment.constantHost + 'DepartmentAndEmployee/GetAllEmployees');
    }

    public getAllDepartments() {
        return this._http.get<Department[]>
            (environment.constantHost + 'DepartmentAndEmployee/GetDepartmentsHierarchy');
    }

    public updateEmployeeFio(employeeId: Guid, newFio: string) {
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        }

        return this._http.put<Employee>
            (environment.constantHost + 'DepartmentAndEmployee/UpdateEmployeeFio/' + employeeId + '/' + newFio, httpOptions);
    }
}