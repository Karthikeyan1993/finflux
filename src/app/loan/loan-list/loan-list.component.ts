import { Component, OnInit } from '@angular/core';
import { LoanService } from './../../loan.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent implements OnInit {
  prop;
  direction  = 'asc';
  searchText;
  searchKey;
  limit = 20;
  loan$: Observable<any[]>;
  constructor(private _LoanService: LoanService) { }

  ngOnInit() {
    this.loan$ = this._LoanService.getAllLoanDetails();
  }

  trackById = (index, item) => {
    return item.member_id
  }

  sortData = (prop: string) => {
    this.prop = prop;
    this.direction = this.direction == 'asc' ? 'desc' : 'asc';
  }

  getSortClass = (prop) => {
    return {
      'fa-sort': this.prop !== prop,
      'fa-caret-up': this.prop === prop && this.direction === 'asc',
      'fa-caret-down': this.prop === prop && this.direction === 'desc'
    };
  }

}