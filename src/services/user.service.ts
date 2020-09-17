import User from 'src/entities/User';
import httpService from './http.service';

export const getUserById = (id: string) => {
  return httpService.get<User>('/users' + id);
};

export const getUser = () => {
  return httpService.get<User>('/users/me');
};

export const postUser = (name: string) => {
  return httpService.post<User>('/users', {name});
};
