import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from 'react-icons/bs'

import MovieCard from "../components/MovieCard"

import "./Movie.css"

const moviesURL = import.meta.env.VITE_API;   // VITE_API=https://api.themoviedb.org/3/movie/
const apiKey = import.meta.env.VITE_API_KEY;  // VITE_API_KEY=api_key=aea0409b087ffbcec6ba9144710e2c05

const formatCurrency = (number) => {
  return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null)

  const getMovie = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setMovie(data)
  }

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`
    getMovie(movieUrl)
  }, [])

  return (
    <div className='movie-page' >
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className='tagline'>{movie.tagline}</p>

          <div className="info">
            <h3>
              <BsWallet2 /> Orçamento:
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>

          <div className="info">
            <h3>
              <BsGraphUp /> Receita:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>

          <div className="info">
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{movie.runtime} minutos</p>
          </div>

          <div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default Movie
