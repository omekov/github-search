import { Component, OnInit, OnDestroy } from "@angular/core";

import { Store, select } from "@ngrx/store";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable, Subscription } from "rxjs";
import { debounceTime, distinctUntilChanged, filter } from "rxjs/operators";
import {
  Repositories,
  RepositoriesState,
  Items,
} from "src/app/core/models/repositories";
import * as State from "src/app/repository/state";
@Component({
  selector: "app-repository",
  templateUrl: "./repository.component.html",
  styleUrls: ["./repository.component.scss"],
})
export class RepositoryComponent implements OnInit, OnDestroy {
  isSort = false;
  loader$: Observable<boolean>;
  error$: Observable<string>;
  repositories$: Observable<Repositories>;
  searchSubscription: Subscription;
  Form = new FormGroup({
    query: new FormControl(
      "",
      Validators.compose([Validators.required, Validators.minLength(3)])
    ),
  });
  constructor(private store: Store<RepositoriesState>) {}
  ngOnInit() {
    this.loader$ = this.store.pipe(select(State.getLoader));
    this.error$ = this.store.pipe(select(State.getError));
    this.repositories$ = this.store.pipe(select(State.getRepositories));
    this.searchSubscription = this.Form.get("query")
      .valueChanges.pipe(
        filter((q) => q.length > 2),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((query) =>
        this.store.dispatch(State.loadRepositories({ query }))
      );
  }
  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }
  filter(stateItems: Items[], key: string,) {
    const items = stateItems.slice().sort((a, b) => this.isSort ? a[key] - b[key] : b[key] - a[key]);
    this.store.dispatch(State.sortRepositories({items}))
    this.isSort = !this.isSort
    console.log(this.isSort)
  }
}
