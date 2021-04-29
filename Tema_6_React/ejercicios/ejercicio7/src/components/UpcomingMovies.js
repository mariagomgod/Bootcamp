import { useState, useEffect } from "react";
import './UpcomingMovies.css';

export default function UpcomingMovies() {

    const [upcomingList, setUpcomingList] = useState([]);

    useEffect(() => {
        const API_UPCOMING = "https://api.themoviedb.org/3/movie/upcoming?api_key=e327fb2b95e51192cbf506af48e3ff2b";
        fetch(API_UPCOMING)
            .then(response => response.json())
            .then(data => setUpcomingList(data.results.slice(0, 20))); // Actualizamos el estado de la lista 
        // con los 20 primeros elementos.
    }, [])

    return (
        <div className="upcoming">
            <ul className="list-group mb-3">
                {upcomingList.map((movie, index) => {
                    return (
                        <li className="list-group-item movie-item border-dark" key={index}>
                            <img src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt=""></img>
                            <a className="movie" href={`/movie/${movie.id}`}>{movie.original_title}</a>
                            <p>{movie.overview}</p>
                            <p>Upcoming date: {movie.release_date}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}
