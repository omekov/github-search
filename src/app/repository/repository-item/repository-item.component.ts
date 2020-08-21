import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Items } from "src/app/core/models/repositories";
import * as State from "src/app/repository/state";
import { Subscription } from "rxjs";

@Component({
  selector: "app-repository-item",
  templateUrl: "./repository-item.component.html",
  styleUrls: ["./repository-item.component.scss"],
})
export class RepositoryItemComponent implements OnInit, OnDestroy {
  id: number;
  repositoryItem: Items;
  private routeSubscription: Subscription;
  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeSubscription = this.route.params
      .subscribe((params) => (this.id = params["id"]))
      .add(
        this.store
          .select(State.getRepositories)
          .subscribe(
            (data) =>
              (this.repositoryItem = data.items.find(
                (item) => item.id == this.id
              ))
          )
      );
  }
  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
