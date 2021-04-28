import './App.css';
import UpcomingMovies from "./components/UpcomingMovies";
import MovieDetails from "./components/MovieDetails";
import { useState, useEffect } from "react";

function App() {

  const [upcomingList, setUpcomingList] = useState([]);

  useEffect(() => {
    const API_UPCOMING = "https://api.themoviedb.org/3/movie/upcoming?api_key=e327fb2b95e51192cbf506af48e3ff2b";
    fetch(API_UPCOMING)
      .then(response => response.json())
      .then(data => setUpcomingList(data.results.slice(0, 20))); // Actualizamos el estado de la lista 
    // con los 20 primeros elementos.
  }, [])

  return (
    <div className="App">
      <UpcomingMovies upcomingList={upcomingList} />
      <MovieDetails /> 
    </div>
  );
}

export default App;
