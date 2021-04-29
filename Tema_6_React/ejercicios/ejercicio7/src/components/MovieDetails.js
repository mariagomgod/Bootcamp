import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetails() {

    const [details, setDetails] = useState({});

    const { id } = useParams(); // Mediante useParams() accedes al parámetro
    // de la ruta, en este caso id.

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e327fb2b95e51192cbf506af48e3ff2b`)
            .then(response => response.json())
            .then(data => setDetails(data))
    }, [id]);

    return (
        <>
            <div className="card border-primary" style={{width: 18 + 'rem'}}>
                <img className="card-img-top" src={`https://image.tmdb.org/t/p/w200/${details.backdrop_path}`} alt=""></img>
                <div className="card-body">
                    <h5 className="card-title">{details.original_title}</h5>
                    <p className="card-text">Genre: {details.genres?.map(genre => genre.name).join(", ")} </p>
                    <p className="card-text">Description: {details.overview}</p>
                    <p className="card-text">{details.tagline}</p>
                    <p className="card-text">{details.vote_average} / 10</p>
                    <a className="btn btn-primary" href={`https://www.imdb.com/title/${details.imdb_id}`} alt="" target="_blank" rel="noopener noreferrer">Read more...</a>
                </div>
            </div>
        </>
    )
}


