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

    function formatDate(dateString) {

        const date = new Date(dateString);

        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }

    return (
        <div className="upcoming">
            <ul className="list-group mb-3">
                {upcomingList.map((movie, index) => {
                    return (
                        <li className="list-group-item movie-item border-dark" key={index}>
                            <img src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt=""></img>
                            <a className="movie" href={`/movie/${movie.id}`}>{movie.original_title}</a>
                            <p className="overview">{movie.overview}</p>
                            <p className="date"><b>Upcoming date: {formatDate(movie.release_date)}</b></p>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}
