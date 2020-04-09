import { createSelector } from '@ngrx/store';
import { IAppState } from './app.state';

const getAllState = (state: any): IAppState => state.app;

export const getAllEditors = createSelector(
  getAllState,
  (state: IAppState) => state.editors,
);
