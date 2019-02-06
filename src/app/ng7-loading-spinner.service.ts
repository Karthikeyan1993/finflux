import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class Ng7LoadingSpinnerService {
  spinnerService$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }

  show = (): void => {
    this.spinnerService$.next(true);
  }
  hide = (): void => {
    this.spinnerService$.next(false);
  }
  getStatus = (): Observable<any> => {
    return this.spinnerService$.asObservable();
  }
}