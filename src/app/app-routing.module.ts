import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanComponent } from './loan/loan.component';
import { LoanListComponent } from './loan/loan-list/loan-list.component';
import { LoanViewComponent } from './loan/loan-view/loan-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoanResolverService } from './loan-resolver.service';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'loan'
  }, {
    path: 'loan',
    component: LoanComponent,
    children: [
      {
        path: '',
        component: LoanListComponent
      }, {
        path: 'view/:id',
        component: LoanViewComponent,
        resolve:{loan:LoanResolverService}
      }
    ]
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }