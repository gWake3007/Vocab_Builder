import axios from 'axios';

export const campersApi = axios.create({
  baseURL: 'https://vocab-builder-backend.p.goit.global',
});
