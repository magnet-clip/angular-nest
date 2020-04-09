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
      switchMap(([{ url }, editors]) => {
        if (url === '') {
          return of(noEditorSelected());
        }
        const editor = editors.find(item => item.path === url);
        if (editor && !editor.selected) {
          return of(editorSelected({ editor }));
        }
        return EMPTY;
      }),
    ),
  );

  editorSelect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editorSelect),
      filter(paylod => paylod.editor !== undefined),
      map(({ editor }) => {
        this.router.navigateByUrl(editor.path);
        return editorSelected({ editor });
      }),
    ),
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private store: Store<any>,
  ) {}
}
