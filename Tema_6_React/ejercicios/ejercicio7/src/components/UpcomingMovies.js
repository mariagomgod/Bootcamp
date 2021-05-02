import { useState, useEffect } from "react";
import './UpcomingMovies.css';

export default function UpcomingMovies() {

    const [upcomingList, setUpcomingList] = useState([]);
    const [criteria, setCriteria] = useState(""); // criterios de búsqueda
    const [currentPage, setCurrentPage] = useState(1); // página actual de resultados
    const [totalPages, setTotalPages] = useState(0); // total de paǵinas para pintar la botonera de paginación

    useEffect(() => {

        const API_MOVIES = criteria ? // si el criterio no está vacío tengo que llamar al endpoint de búsqueda
            `https://api.themoviedb.org/3/search/movie?api_key=e327fb2b95e51192cbf506af48e3ff2b&query=${criteria}&page=${currentPage}` :
            `https://api.themoviedb.org/3/movie/upcoming?api_key=e327fb2b95e51192cbf506af48e3ff2b&page=${currentPage}`;

        fetch(API_MOVIES)
            .then(response => response.json())
            .then(data => {
                setUpcomingList(data.results.slice(0, 20)); // Actualizamos el estado de la lista con los 20 primeros elementos.
                setTotalPages(data.total_pages);
            });
    }, [criteria, currentPage])

    function formatDate(dateString) {

        const date = new Date(dateString);

        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }

    return (
        <div className="upcoming">
            <input className="search" type="text" placeholder="Search" onChange={e => setCriteria(e.target.value)} />
            <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
                <div className="btn-group mr-2" role="group" aria-label="First group">
                    {
                        Array(totalPages).map((elem, i) => {
                            return (
                                <button type="button" key={i + 1} class="btn btn-secondary" onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
                            );
                        })
                    } {/* Creo un array con tantas posiciones vacías como se le indique en el constructor (totalPages).
                          Los valores los descarto porque lo que importa es saber el índice de cada uno para pintar el botón con 
                          dicho índice + 1. */}
                </div>
            </div>
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
