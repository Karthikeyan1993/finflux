import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class LoanService {
  readonly BASE_URL = 'http://localhost:5000/api/loan/';
  constructor(private _http: HttpClient) { }

  getAllLoanDetails = () => {
   return this._http.get<any[]>(`${this.BASE_URL}` + 'all');
  }

  getLoanById = (id) => {
    return this._http.get<any[]>(`${this.BASE_URL}` + id);
  }
}