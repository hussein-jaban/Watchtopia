import {API_KEY} from '@env';
import {subGenres} from '../constants/genreList';
const url = 'https://api.themoviedb.org/3';

const apiKey = API_KEY;

const getGenreData = async (type: string, id: number, page?: number) => {
  const res = await fetch(
    `${url}/discover/${type}?api_key=${apiKey}&with_genres=${id}&language=en-US&page=${
      page || 1
    }`,
  );
  const data = await res.json();
  return data;
};
const getMovieTypeData = async (type: string) => {
  const res = await fetch(`${url}/movie/${type}?api_key=${apiKey}`);
  const data = await res.json();
  return data;
};
const getTVTypeData = async (type: string) => {
  const res = await fetch(`${url}/tv/${type}?api_key=${apiKey}`);
  const data = await res.json();
  return data;
};

const searchData = async (type: string, query: string) => {
  const res = await fetch(
    `${url}/search/${type}?query=${query}&api_key=${apiKey}`,
  );
  const data = await res.json();
  return data;
};

const getPopularTv = async () => {
  const res = await fetch(`${url}/tv/popular?api_key=${apiKey}`);
  const data = await res.json();
  return data;
};
// const first = ['latest', 'top_rated'];
const getMoviePageData = async () => {
  // const firstLoop = first.map(async item => getMovieTypeData(item));
  const secondLoop = subGenres.map(async item =>
    getGenreData('movie', item.id),
  );
  const res = await Promise.all([...secondLoop]);
  return res;
};

const searchPlaceholderFetch = async () => {
  const popularMovies = await getMovieTypeData('popular');
  const popularTv = await getTVTypeData('top_rated');
  const res = await Promise.all([popularMovies, popularTv]);
  return res;
};

export {
  getPopularTv,
  getMovieTypeData,
  getTVTypeData,
  getGenreData,
  getMoviePageData,
  searchPlaceholderFetch,
  searchData,
};
