import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { LoanService } from "./loan.service";
@Injectable({ providedIn: "root" })
export class LoanResolverService implements Resolve<any> {
  constructor(private _LoanService: LoanService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this._LoanService.getLoanById(route.paramMap.get("id"));
  }
}
