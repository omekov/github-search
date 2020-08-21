import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { ReposiotoryService } from "src/app/core/services/repository.service";
import { of } from "rxjs";
import { concatMap, map, catchError, tap } from "rxjs/operators";
import * as RepositoriesActions from "./action";
@Injectable()
export class RepositoryEffects {
  constructor(
    private actions$: Actions,
    private repositoryService: ReposiotoryService
  ) {}

  @Effect()
  loadRepositories$ = this.actions$.pipe(
    ofType(RepositoriesActions.loadRepositories),
    concatMap((action) =>
      this.repositoryService.searchRepository(action.query).pipe(
        map((repositories) =>
          RepositoriesActions.loadRepositorySuccess({ repositories })
        ),
        catchError((error) =>
          of(RepositoriesActions.loadRepositoryFailure({ error }))
        )
      )
    )
  );
}
