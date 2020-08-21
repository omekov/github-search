import { createReducer, on } from "@ngrx/store";
import { RepositoriesState } from "src/app/core/models/repositories";
import * as RepositoriesActions from "./action";
const initialState: RepositoriesState = {
  repositories: {
    total_count: 0,
    items: []
  },
  loader: false,
  error: null,
};

export const repositoryReducer = createReducer<RepositoriesState>(
  initialState,
  on(
    RepositoriesActions.loadRepositories,
    (state): RepositoriesState => {
      return {
        ...state,
        loader: true,
      };
    }
  ),
  on(
    RepositoriesActions.loadRepositorySuccess,
    (state, { repositories }): RepositoriesState => {
      return {
        ...state,
        repositories,
        error: "",
        loader: false,
      };
    }
  ),
  on(
    RepositoriesActions.loadRepositoryFailure,
    (state, { error }): RepositoriesState => {
      return {
        ...state,
        repositories: initialState.repositories,
        error,
        loader: false,
      };
    }
  ),
  on(
    RepositoriesActions.sortRepositories,
    (state, { items }): RepositoriesState => {
      return {
        ...state,
        repositories: {
          items: items,
          total_count: state.repositories.total_count,
        },
      };
    }
  )
);
