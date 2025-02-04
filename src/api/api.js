import axios from 'axios';

export const vocabBuilderApi = axios.create({
  baseURL: 'https://vocab-builder-backend.p.goit.global',
});
