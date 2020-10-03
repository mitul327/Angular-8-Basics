import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable()
export class EmployeeService {
  private REST_API_SERVER = "/v1/employeeData";

  constructor(private http: HttpClient) {}

  public getEmployees() {
    return this.http
      .get(this.REST_API_SERVER)
      .pipe(retry(3), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = "Unknown error!";
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
