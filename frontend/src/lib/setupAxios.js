import axios from 'axios';
import { getApiBaseUrl } from '../utils/apiBase';

const apiBaseUrl = getApiBaseUrl();

if (apiBaseUrl) {
  axios.defaults.baseURL = apiBaseUrl;
}

axios.defaults.withCredentials = false;

export default axios;


