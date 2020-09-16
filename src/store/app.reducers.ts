import {createAction, createReducer} from '@reduxjs/toolkit';
import {KeepRight} from './../services/auth.service';

export interface AppState {
  isInitialized: boolean;
  keepRight?: KeepRight;
}

const initialState: AppState = {
  isInitialized: false,
};

export const init = createAction<KeepRight>('INITIALIZE_APP');

export const app = createReducer(initialState, builder =>
  builder.addCase(init, (state, action) => ({
    ...state,
    isInitialized: true,
    keepRight: action.payload,
  })),
);
