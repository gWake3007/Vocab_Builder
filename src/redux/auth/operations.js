import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
import { persistor } from '../store.js';

axios.defaults.baseURL = 'https://vocab-builder-backend.p.goit.global';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const cleanHeaderToken = () => {
  axios.defaults.headers.common.Authorization = '';
  persistor.purge();
};

let hasShownToast = false;

export const setupAxiosInterceptors = dispatch => {
  axios.interceptors.response.use();
};
