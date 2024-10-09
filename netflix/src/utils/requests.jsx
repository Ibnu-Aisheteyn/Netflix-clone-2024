const API_KEY = import.meta.env.VITE_API_KEY; // Vite way to access environment variables

let requests = {
  fetchTrending: `/trending/movie/week?api_key=${API_KEY}`,
  fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTvShows: `/tv/popular?api_key=${API_KEY}`,
};

export default requests;
