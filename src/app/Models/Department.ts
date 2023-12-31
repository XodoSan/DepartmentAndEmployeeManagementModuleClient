import { Guid } from "guid-typescript";

//Отдел
export class Department {
    public id!: Guid;
    public name!: string;
    public childDepartments!: Department[];
    public parentDepartmentId!: Guid;
    public employeesCount!: number;
}