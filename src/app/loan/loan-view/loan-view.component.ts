import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-loan-view",
  templateUrl: "./loan-view.component.html",
  styleUrls: ["./loan-view.component.css"]
})
export class LoanViewComponent implements OnInit {
  data;
  constructor(private _router: ActivatedRoute) {}

  ngOnInit() {
    this.data = this._router.snapshot.data.loan.data;
    console.log(this.data);
  }
}
