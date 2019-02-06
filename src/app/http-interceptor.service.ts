import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Ng7LoadingSpinnerService } from './ng7-loading-spinner.service';
@Injectable(
  { providedIn: 'root' }
)
export class HttpInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this._loadingService.show();
    return next.handle(req).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        console.log("response recived");
        this._loadingService.hide();
      }
      return event;
    }), catchError((error: HttpErrorResponse) => {
      console.error("http request failed");
      alert('http request failed');
      this._loadingService.hide();
      return throwError(error);
    }));
  }
  constructor(private _loadingService: Ng7LoadingSpinnerService) { }

}