import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

function Favoritos(props) {
  let token = sessionStorage.getItem("token");

  return (
    <>
      {!token && <Navigate replace to="/" />}
      <h2>FAVORITOS</h2>

      <div className="row">
        {!props.favorites.length && (
          <div>No hay películas agregadas a Favoritos</div>
        )}
        {props.favorites.map((oneMovie, idx) => {
          return (
            <div className="col-3" key={idx}>
              <div className="card my-4">
                <img
                  src={oneMovie.imgURL}
                  className="card-img-top"
                  alt="..."
                ></img>
                <button
                  className="favourite-btn"
                  onClick={props.addOrRemoveFromFavs}
                  data-movie-id={oneMovie.id}
                >
                  ❤️
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

export default Favoritos;
