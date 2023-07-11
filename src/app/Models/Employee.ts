import { Guid } from "guid-typescript";

//Сотрудник
export class Employee {
    public id!: Guid;
    public fio!: string;
    public departmentId!: Guid;
}