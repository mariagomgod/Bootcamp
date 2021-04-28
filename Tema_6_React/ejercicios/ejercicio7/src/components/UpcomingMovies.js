import MovieDetails from "./MovieDetails";
import './UpcomingMovies.css';

export default function UpcomingMovies({ upcomingList }) {
    return (
        <div>
            <h2 className="my-4">Upcoming movies</h2>
            <ul className="list-group mb-3 col-12 col-sm-6 col-xl-3">
                {upcomingList.map((movie, index) => {
                    return (
                        <li className="list-group-item movie-item" key={index}><img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}></img>{movie.original_title}</li>
                    );
                })}
            </ul>
        </div>
    )
}
