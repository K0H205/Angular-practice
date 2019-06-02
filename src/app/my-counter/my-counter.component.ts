import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { Increment, Decrement, Reset } from "../store/counter.actions";

@Component({
  selector: "app-my-counter",
  templateUrl: "./my-counter.component.html",
  styleUrls: ["./my-counter.component.scss"]
})
export class MyCounterComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {}
  ngOnInit() {
    this.count$ = this.store.pipe(select("count"));
  }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset());
  }
}
