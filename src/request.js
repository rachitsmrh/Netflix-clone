const key = "f2af1107e77c89542d77059b6e631f15";

const request = {
  Trending: `/trending/all/week?api_key=${key}&language=en-US`,
  NetflixOriginals: `/discover/tv?api_key=${key}&with_networks=213`,
  TopRated: `/movie/top_rated?api_key=${key}&language=en-US`,
  ActionMovies: `/discover/movie?api_key=${key}&with_genres=28`,
  ComedyMovies: `/discover/movie?api_key=${key}&with_genres=35`,
  HorrorMovies: `/discover/movie?api_key=${key}&with_genres=27`,
  RomanceMovies: `/discover/movie?api_key=${key}&with_genres=10749`,
  DocumentMovies: `/discover/movie?api_key=${key}&with_genres=99`,
};

export default request;
