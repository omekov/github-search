import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RepositoryComponent } from "./repository/repository.component";
import { RepositoryItemComponent } from "./repository-item/repository-item.component";

const routes: Routes = [
  {
    path: "",
    component: RepositoryComponent,
  },
  {
    path: ":id",
    component: RepositoryItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepositoryRoutingModule {}
