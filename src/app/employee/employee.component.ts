import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  showDetails: boolean = false;
  statusMessage: string;

  public toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  constructor() {}

  ngOnInit() {}
}
