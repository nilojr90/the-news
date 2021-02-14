import axios from 'axios';

export function getKey(): string {
  return '2uQnJdaCEfVgxjCqwDgHGc6QAvQLcPzw';
}

const topStoriesApi = axios.create({
  baseURL:
    'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=2uQnJdaCEfVgxjCqwDgHGc6QAvQLcPzw',
});

export default topStoriesApi;
