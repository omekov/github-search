import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./repository/repository.module").then(
            (m) => m.RepositoryModule
          ),
      },
    ],
  },
  {
    path: "**",
    redirectTo: "",
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
