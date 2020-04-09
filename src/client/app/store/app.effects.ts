import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { editorSelected, editorSelect } from './app.actions';
import { map, filter } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AppEffects {
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

  constructor(private actions$: Actions, private router: Router) {}
}
