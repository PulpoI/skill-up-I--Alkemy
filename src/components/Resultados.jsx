import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "@sweetalert/with-react";

function Resultados() {
  let query = new URLSearchParams(window.location.search);
  let keyword = query.get("keyword");

  const [movieResults, setMovieResults] = useState([]);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=daf3d8e5ef084e18996c94df56995434&language=es-ES&query=${keyword}`;
    axios
      .get(endPoint)
      .then((response) => {
        const moviesArray = response.data.results;
        // if (moviesArray.length === 0) {
        //   swal(<h4>No se encontraron peliculas</h4>);
        // }
        setMovieResults(moviesArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieResults]);

  // https://api.themoviedb.org/3/search/movie?api_key=daf3d8e5ef084e18996c94df56995434&language=es-ES&query=spider
  return (
    <>
      <h2>
        Buscaste: <em>{keyword}</em>
      </h2>
      {movieResults.length === 0 && <h3>No hay resultados</h3>}
      <div className="row">
        {movieResults.map((oneMovie, idx) => {
          return (
            <div className="col-4" key={idx}>
              <div className="card">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                  className="card-img-top"
                  alt="..."
                ></img>
                <div className="card-body">
                  <h5 className="card-title">{oneMovie.title}</h5>
                  <p className="card-text">{oneMovie.overview}</p>
                  <Link
                    to={`/detalle?movieID=${oneMovie.id}`}
                    className="btn btn-primary"
                  >
                    View detail
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Resultados;
