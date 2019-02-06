import { Component, OnInit } from '@angular/core';
import { Ng7LoadingSpinnerService } from '../ng7-loading-spinner.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-ng7-loading-spinner',
  templateUrl: './ng7-loading-spinner.component.html',
  styleUrls: ['./ng7-loading-spinner.component.css']
})
export class Ng7LoadingSpinnerComponent implements OnInit {
  flag$: Observable<boolean>;
  constructor(private _Ng7LoadingSpinnerService: Ng7LoadingSpinnerService) { }

  ngOnInit() {
    this.getStatus();
  }

  getStatus = () => {
    this.flag$ = this._Ng7LoadingSpinnerService.getStatus();
  }

  ngOnDestroy() {
  }


}