import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { EmployeeComponent } from "./employee/employee.component";
import { EmployeeListComponent } from "./employee/employee-list/employee-list.component";
import { EmployeeTitlePipe } from "./employee/employee-list/employee-title.pipe";
import { EmployeeCountComponent } from "./employee/employee-list/employee-count/employee-count.component";
import { SimpleComponent } from "./simple/simple.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { MockHttpCalIInterceptor } from "./http.interceptor";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "employees", component: EmployeeListComponent },
  { path: "employees/:code", component: EmployeeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeTitlePipe,
    EmployeeCountComponent,
    SimpleComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockHttpCalIInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
