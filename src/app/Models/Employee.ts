import { Guid } from "guid-typescript";

export class Employee {
    public id!: Guid;
    public fio!: string;
    public departmentId!: Guid;
}