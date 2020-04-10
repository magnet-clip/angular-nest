import { createAction, props } from '@ngrx/store';
import { getActionName, AppModuleName } from '../shared/helpers/action-name';
import { NavPage } from '../models/nav-page';

const currentModule: AppModuleName = 'Core';

export const checkCurrentRoute = createAction(
  getActionName(currentModule, 'initCurrentRoute'),
  props<{ url: string }>(),
);

export const editorSelect = createAction(
  getActionName(currentModule, 'editorSelect'),
  props<{ page: NavPage }>(),
);

export const editorSelected = createAction(
  getActionName(currentModule, 'editorSelected'),
  props<{ page: NavPage }>(),
);

export const noEditorSelected = createAction(
  getActionName(currentModule, 'noEditorSelected'),
);
