import { Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import swal from "@sweetalert/with-react";
import Carousel from "./Carousel";

function Listado(props) {
  let token = sessionStorage.getItem("token");

  const [movieList, setMovieList] = useState([]);

  //******** axios
  // useEffect(() => {
  //   const endPoint =
  //     "https://api.themoviedb.org/3/discover/movie?api_key=daf3d8e5ef084e18996c94df56995434&language=es-ES&sort_by=popularity.desc";
  //   axios
  //     .get(endPoint)
  //     .then((response) => {
  //       const apiData = response.data;
  //       setMovieList(apiData.results);
  //     })
  //     .catch((error) => {
  //       swal(<h2>Hubo errores, intenta mas tarde</h2>);
  //     });
  // }, [setMovieList]);

  //*********** fetch() async() await
  // useEffect(() => {
  //   const endPoint = async () => {
  //     const data = await fetch(
  //       "https://api.themoviedb.org/3/discover/movie?api_key=daf3d8e5ef084e18996c94df56995434&language=es-ES&sort_by=popularity.desc"
  //     );
  //     const json = await data.json();
  //     setMovieList(json.results);
  //   };
  //   endPoint();
  // }, [setMovieList]);

  //************* fetch() .then()
  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/discover/movie?api_key=daf3d8e5ef084e18996c94df56995434&language=es-ES&sort_by=popularity.desc";
    fetch(url).then((response) =>
      response
        .json()
        .then((data) => setMovieList(data.results))
        .catch((error) => {
          swal(<h2>Hubo errores, intenta mas tarde</h2>);
        })
    );
  }, [setMovieList]);

  return (
    <>
      {!token && <Navigate replace to="/" />}
      <Carousel imgSource={movieList} />
      <div className="row">
        {movieList.map((oneMovie, idx) => {
          return (
            <div className="col-3" key={idx}>
              <div className="card my-4">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                  className="card-img-top"
                  alt="..."
                ></img>
                <button
                  className="favourite-btn"
                  onClick={props.addOrRemoveFromFavs}
                  data-movie-id={oneMovie.id}
                >
                  🖤
                </button>
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

export default Listado;
