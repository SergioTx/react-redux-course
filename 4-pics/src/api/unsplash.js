import axios from 'axios';
import { UNSPLASH_APIKEY } from './config';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${UNSPLASH_APIKEY}`,
  },
});
