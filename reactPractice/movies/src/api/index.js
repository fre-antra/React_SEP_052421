import axios from 'axios'

 const movieAPI = (movie) => ({
  method: 'GET',
  url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
  params: {s: `${movie}`, page: '1', r: 'json'},
  headers: {
    'x-rapidapi-key': '634284c861msh8d1087ba07054a1p1b6e6fjsn85f2759cad9f',
    'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
  }
 });

 axios.request(movieAPI).then(function (response) {
     console.log(response.data);
 }).catch(function (error) {
     console.error(error);
 });

export const  getMovie = (movie) => axios.request(movieAPI(movie))
 
 export default movieAPI
