import axios from 'axios';

export function getKey(): string {
  return `${process.env.REACT_APP_NWT_API_KEY}`;
}

const topStoriesApi = axios.create({
  baseURL: `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${getKey()}`,
  responseType: 'json',
});

export default topStoriesApi;
