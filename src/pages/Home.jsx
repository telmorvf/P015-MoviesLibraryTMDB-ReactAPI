import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API;   // VITE_API=https://api.themoviedb.org/3/movie/
const apiKey = import.meta.env.VITE_API_KEY;  // VITE_API_KEY=api_key=aea0409b087ffbcec6ba9144710e2c05

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    //console.log(data.results)
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    //console.log(topRatedUrl);
    getTopRatedMovies(topRatedUrl);
  }, []);


  return (
    <div className="container">

      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies === 0 && <p>Carregando...</p>}
        {/* {topMovies.length > 0 && topMovies.map((movie) => <p key={movie.id}>{movie.title}</p>)} */}
        {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}

      </div>
    </div>
  )
}

export default Home
