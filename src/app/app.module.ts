import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChartModule } from 'angular2-highcharts';

// Routing Configuration
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoanComponent } from './loan/loan.component';
import { LoanListComponent } from './loan/loan-list/loan-list.component';
import { LoanViewComponent } from './loan/loan-view/loan-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TableSortPipe } from './table-sort.pipe';
import { TableFilterPipe } from './table-filter.pipe';
import { Ng7LoadingSpinnerService } from './ng7-loading-spinner.service';
import { Ng7LoadingSpinnerComponent } from './ng7-loading-spinner/ng7-loading-spinner.component';
import { HttpInterceptorService } from './http-interceptor.service';
import { LoanChartComponent } from './loan/loan-chart/loan-chart.component';


declare var require: any;

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, ChartModule.forRoot(require('highcharts'))],
  declarations: [AppComponent, LoanComponent, LoanListComponent, LoanViewComponent, PageNotFoundComponent, TableSortPipe, TableFilterPipe, Ng7LoadingSpinnerComponent, LoanChartComponent],
  bootstrap: [AppComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}]
})
export class AppModule { }
