import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Editor } from '../models/editor';
import { editorSelect } from '../store/app.actions';
import { getAllEditors } from '../store/app.selectors';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  editors$ = this.store.select(getAllEditors);

  public navigate(editor: Editor) {
    this.store.dispatch(editorSelect({ editor }));
  }

  constructor(private store: Store<any>) {}
}
