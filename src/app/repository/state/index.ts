import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RepositoriesState } from "src/app/core/models/repositories";

const getRepositoryFeatureState = createFeatureSelector<RepositoriesState>(
  "repositories"
);
export const getRepositories = createSelector(
  getRepositoryFeatureState,
  (state) => state.repositories
);
export const getError = createSelector(
  getRepositoryFeatureState,
  (state) => state.error
);

export const getLoader = createSelector(
  getRepositoryFeatureState,
  (state) => state.loader
);

export * from "./reducer";
export * from "./action";
export * from "./effect";
