import { createAction, props } from "@ngrx/store";
import { Repositories, Items } from "src/app/core/models/repositories";

export const loadRepositories = createAction(
  "[Repository] Load",
  props<{ query: string }>()
);

export const loadRepositorySuccess = createAction(
  "[Repository] Load Success",
  props<{ repositories: Repositories }>()
);

export const loadRepositoryFailure = createAction(
  "[Repository] Load Failure",
  props<{ error: string }>()
);

export const clearQueryRepositories = createAction(
  "[Repository] Clear Query",
  props<{ query: string }>()
);
export const sortRepositories = createAction(
  "[Repository] Sort Items",
  props<{ items: Items[] }>()
);
