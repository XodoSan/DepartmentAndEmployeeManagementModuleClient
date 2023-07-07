import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Employee } from "../Models/Employee";
import { environment } from "src/environments/environment";

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
}