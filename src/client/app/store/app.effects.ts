import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  editorSelected,
  editorSelect,
  noEditorSelected,
  checkCurrentRoute,
} from './app.actions';
import { map, filter, withLatestFrom, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getAllEditors } from './app.selectors';
import { EMPTY, of } from 'rxjs';

@Injectable()
export class AppEffects {
  initRoute$ = createEffect(() =>
    this.actions$.pipe(
      ofType(checkCurrentRoute),
      withLatestFrom(this.store.select(getAllEditors)),
      switchMap(([{ url }, pages]) => {
        if (url === '') {
          return of(noEditorSelected());
        }
        const page = pages.find(item => item.path === url);
        if (page && !page.selected) {
          return of(editorSelected({ page }));
        }
        return EMPTY;
      }),
    ),
  );

  editorSelect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editorSelect),
      filter(paylod => paylod.page !== undefined),
      map(({ page }) => {
        this.router.navigateByUrl(page.path);
        return editorSelected({ page });
      }),
    ),
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private store: Store<any>,
  ) {}
}
