import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../servicesApi/Api.js";
import MoviesList from "../../Components/Movies/Movies.js";


export default function HomePage()  {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchTrendingMovies().then((data) => {
          setMovies(data.results);
        });
      }, []);

    return (
      <>
        <h2>Trending Today</h2>
  
        {movies && <MoviesList movies={movies} />}
      </>
    );
}