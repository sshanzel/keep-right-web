import {createAction, createReducer} from '@reduxjs/toolkit';
import User from 'src/entities/User';

const SET_USER = 'SET_USER';
const SET_IS_OBSERVING_STATE = 'SET_IS_OBSERVING_STATE';

export interface AuthState {
  user?: User;
  isObservingState: boolean;
}

const initialState: AuthState = {
  isObservingState: false,
};

export const setUser = createAction<User | undefined>(SET_USER);
export const setIsObservingState = createAction<boolean>(SET_IS_OBSERVING_STATE);

export const auth = createReducer(initialState, builder =>
  builder
    .addCase(setUser, (state, action) => ({...state, user: action.payload}))
    .addCase(setIsObservingState, (state, action) => ({
      ...state,
      isObservingState: action.payload,
    })),
);

export default auth;
