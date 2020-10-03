import { Component, OnInit } from "@angular/core";
import { IEmployee } from "src/app/models/employee";
import { EmployeeService } from "src/app/models/employee.service";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"],
  providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
  selectedEmployeeCountRadioButton: string = "All";
  public employees: IEmployee[];

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit() {
    this._employeeService.getEmployees().subscribe((data: IEmployee[]) => {
      this.employees = data;
    });
  }

  // trackByEmpCode(index: number, employee: any): string {
  //   return employee.code;
  // }

  getTotalEmployeesCount() {
    return this.employees.length;
  }

  getTotalMaleEmployeesCount() {
    return this.employees.filter(e => e.gender === "Male").length;
  }

  getTotlaFemaleEmployeesCount() {
    return this.employees.filter(e => e.gender === "Female").length;
  }

  onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
  }
}
