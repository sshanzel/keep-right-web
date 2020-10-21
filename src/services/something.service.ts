import http from './http.service';
import Something from 'src/entities/Something';

export const getSomethings = () => {
  return http.get<Something[]>('/somethings');
};
