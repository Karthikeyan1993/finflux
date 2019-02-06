import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-loan-view',
  templateUrl: './loan-view.component.html',
  styleUrls: ['./loan-view.component.css']
})
export class LoanViewComponent implements OnInit {
  data;
  loan;
  constructor(private _router: ActivatedRoute) { }

  ngOnInit() {
    this.data = this._router.snapshot.data.loan.data;
    this.loan = Object.assign({}, this.data);
    this.loan.amortization = [];
    const term = Number(this.getDuration(this.data.term));
    const interestRate = parseFloat((Number(this.data.int_rate) / 100.0).toString());

    this.loan.totl_payment = this.data.installment * term;
    this.loan.month_installment = this.calCulateMonthyPayment(this.data.loan_amnt, interestRate, term).toFixed(2);
    this.loan.yearly_interest = (((this.data.installment * term) - this.data.loan_amnt) / (term / 12)).toFixed(2);
    this.loan.monthly_interest = ((((this.data.installment * term) - this.data.loan_amnt) / (term / 12)) / 12).toFixed(2);
    this.loan.totl_interest = ((this.data.installment * term)- this.data.loan_amnt).toFixed(2);
    this.loan.amortization = this.calculateAmortization(this.loan, term, interestRate);
  }

  calculateAmortization = (loan, terms, interestRate) => {
    let dummy = [];
    let interest = 0;
    let monthlyPrincipal = 0;
    let balance = loan.loan_amnt;
    const monthlyRate = interestRate / 12;
    for (let i = 0; i < terms; i++) {
      interest = balance * monthlyRate;
      monthlyPrincipal = loan.month_installment - interest;
      balance = balance - monthlyPrincipal;
      dummy.push({
        'rowNum': i + 1,
        'interest': interest.toFixed(2),
        'principal': monthlyPrincipal.toFixed(2),
        'balance': balance.toFixed(2),
      });
    }
    return dummy;
  }

  calCulateMonthyPayment = (balance, interestRate, terms) => {
    const monthlyRate = interestRate / 12;
    const payment = balance * (monthlyRate / (1 - Math.pow(
      1 + monthlyRate, -terms)));
    return payment;
  }

  getDuration = (term: string) => {
    let _str = term;
    return _str.trim().split(" ")[0];
  }

}