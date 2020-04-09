import { createAction, props } from '@ngrx/store';
import { getActionName, AppModuleName } from '../shared/helpers/action-name';
import { Editor } from '../models/editor';

const currentModule: AppModuleName = 'Core';

export const checkCurrentRoute = createAction(
  getActionName(currentModule, 'initCurrentRoute'),
  props<{ url: string }>(),
);

export const editorSelect = createAction(
  getActionName(currentModule, 'editorSelect'),
  props<{ editor: Editor }>(),
);

export const editorSelected = createAction(
  getActionName(currentModule, 'editorSelected'),
  props<{ editor: Editor }>(),
);

export const noEditorSelected = createAction(
  getActionName(currentModule, 'noEditorSelected'),
);
