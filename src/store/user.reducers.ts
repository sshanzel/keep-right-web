import {createAction, createReducer} from '@reduxjs/toolkit';
import User from '@entities/User';

const SET_USER = 'SET_USER';

export const setUser = createAction<User>(SET_USER);

export const user = () =>
  createReducer<User | null>(null, builder =>
    builder.addCase(setUser, (_, action) => ({...action.payload})),
  );

export default user;
