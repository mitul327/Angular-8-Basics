import { Injectable, Injector } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import * as employeeData from "./data/employeeData.json";
import { element } from 'protractor';

const urls = [
  {
    url: "/v1/employeeData",
    json: employeeData
  }
];

@Injectable()
export class MockHttpCalIInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    for (const element of urls) {
      if (request.url === element.url) {
        return of(
          new HttpResponse({ status: 200, body: (element.json as any).default })
        );
      }
    }

    return next.handle(request);
  }
}
