import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RepositoryRoutingModule } from "./repository-routing.module";
import { RepositoryComponent } from "./repository/repository.component";
import { RepositoryItemComponent } from "./repository-item/repository-item.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { repositoryReducer, RepositoryEffects } from "./state";
import { ReposiotoryService } from "../core/services/repository.service";

@NgModule({
  declarations: [RepositoryComponent, RepositoryItemComponent],
  imports: [
    CommonModule,
    RepositoryRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature("repositories", repositoryReducer),
    EffectsModule.forFeature([RepositoryEffects]),
  ],
  providers: [ReposiotoryService],
})
export class RepositoryModule {}
