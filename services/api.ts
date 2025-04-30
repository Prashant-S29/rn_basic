export const tmdbConifg = {
  baseURL: 'https://api.themoviedb.org/3',
  apiKey: process.env.EXPO_PUBLIC_TMDB_API_KEY,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_API_KEY}`,
  },
};

export const fetchMovies = async ({ query }: { query?: string }) => {
  const endpoint = query
    ? `/search/movie/query?${encodeURIComponent(query)}`
    : '/discover/movie?sort_by=popularity.desc';

  const res = await fetch(`${tmdbConifg.baseURL}${endpoint}`, {
    method: 'GET',
    headers: tmdbConifg.headers,
  });
  //   const json = await res.json();
  if (!res.ok) {
    console.error(res);
    throw new Error('Something went wrong');
  }

  const data = await res.json();

  return data.results;
};
