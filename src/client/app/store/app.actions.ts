import { createAction, props } from '@ngrx/store';
import { getActionName, AppModuleName } from '../shared/helpers/action-name';
import { Editor } from '../models/editor';

const currentModule: AppModuleName = 'Core';

export const editorSelect = createAction(
  getActionName(currentModule, 'editorSelect'),
  props<{ editor: Editor }>(),
);

export const editorSelected = createAction(
  getActionName(currentModule, 'editorSelected'),
  props<{ editor: Editor }>(),
);
