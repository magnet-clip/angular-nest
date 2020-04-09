import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Editor } from '../models/editor';
import { editorSelect, checkCurrentRoute } from '../store/app.actions';
import { getAllEditors } from '../store/app.selectors';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  editors$ = this.store.select(getAllEditors);

  public navigate(editor: Editor) {
    this.store.dispatch(editorSelect({ editor }));
  }

  constructor(private store: Store<any>, private router: Router) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map((event: NavigationEnd) => event.url),
      )
      .subscribe(url => {
        this.store.dispatch(checkCurrentRoute({ url }));
      });
  }
}
