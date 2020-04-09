import { createReducer, Action, on } from '@ngrx/store';
import { IAppState, APP_INITIAL_STATE } from './app.state';
import * as appActions from './app.actions';

const appReducer = createReducer(
  APP_INITIAL_STATE,
  on(
    appActions.editorSelected,
    (state: IAppState, { editor }): IAppState => {
      return {
        ...state,
        editors: state.editors.map(item => ({
          ...item,
          selected: item.path === editor.path,
        })),
      };
    },
  ),
  on(
    appActions.noEditorSelected,
    (state: IAppState): IAppState => {
      return {
        ...state,
        editors: [...APP_INITIAL_STATE.editors],
      };
    },
  ),
);

export function mainAppReducer(state: IAppState, action: Action) {
  return appReducer(state, action);
}
