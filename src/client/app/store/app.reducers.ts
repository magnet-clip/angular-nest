import { createReducer, Action, on } from '@ngrx/store';
import { IAppState, APP_INITIAL_STATE } from './app.state';
import * as appActions from './app.actions';

const appReducer = createReducer(
  APP_INITIAL_STATE,
  on(
    appActions.editorSelected,
    (state: IAppState, { page }): IAppState => {
      return {
        ...state,
        pages: state.pages.map(item => ({
          ...item,
          selected: item.path === page.path,
        })),
      };
    },
  ),
  on(
    appActions.noEditorSelected,
    (state: IAppState): IAppState => {
      return {
        ...state,
        pages: [...APP_INITIAL_STATE.pages],
      };
    },
  ),
);

export function mainAppReducer(state: IAppState, action: Action) {
  return appReducer(state, action);
}
