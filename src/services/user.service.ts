import {AxiosResponse} from 'axios';
import User from 'src/entities/User';

export const getUserByUid = (uid: string) => {
  const response = {data: {id: ''} as User} as AxiosResponse;

  return Promise.resolve(response);
};
