// Libraries
import { Routes, Route } from "react-router-dom";

// Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Listado from "./components/Listado";
import Login from "./components/Login";
import Detalle from "./components/Detalle";
import Resultados from "./components/Resultados";

// Styles
// import "./css/bootstrap.min.css";
import "./css/app.css";
import Favoritos from "./components/Favoritos";
import { useEffect, useState } from "react";

function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favMovie = localStorage.getItem("favs"); // levanta el LS

    if (favMovie !== null) {
      const favsArray = JSON.parse(favMovie);
      console.log(favsArray);
      setFavorites(favsArray);
    }
  }, []);

  const addOrRemoveFromFavs = (e) => {
    const favMovie = localStorage.getItem("favs"); // levanta el LS

    let tempMoviesInFavs;

    if (favMovie === null) {
      tempMoviesInFavs = [];
    } else {
      tempMoviesInFavs = JSON.parse(favMovie);
    }

    const btn = e.currentTarget;
    const parent = btn.parentElement; // parentElement para capturar el div padre
    const imgURL = parent.querySelector("img").getAttribute("src");
    const title = parent.querySelector("h5").innerText;
    const overview = parent.querySelector("p").innerText;

    const movieData = {
      //creamos el objeto literal con los datos obtenidos
      imgURL,
      title,
      overview,
      id: btn.dataset.movieId, //obtenemos el id desde data
    };
    let movieIsInArray = tempMoviesInFavs.find((onMovie) => {
      return onMovie.id === movieData.id;
    });

    if (!movieIsInArray) {
      tempMoviesInFavs.push(movieData); //sumamos los favoritos al array
      localStorage.setItem("favs", JSON.stringify(tempMoviesInFavs)); //guardamos en LS
      setFavorites(tempMoviesInFavs);
    } else {
      let moviesLeft = tempMoviesInFavs.filter((oneMovie) => {
        return oneMovie.id !== movieData.id;
      });
      localStorage.setItem("favs", JSON.stringify(moviesLeft));
      setFavorites(moviesLeft);
    }
  };

  return (
    <>
      <Header favorites={favorites} />
      <div className="container mt-3">
        <Routes>
          <Route exact path="/" element={<Login />} />
          {/* <Route path="/listado" element={<Listado />} /> */}
          <Route
            path="/listado"
            element={<Listado addOrRemoveFromFavs={addOrRemoveFromFavs} />}
          ></Route>
          <Route
            exact
            path="/detalle"
            element={<Detalle addOrRemoveFromFavs={addOrRemoveFromFavs} />}
          />
          <Route exact path="/resultados" element={<Resultados />} />
          <Route
            exact
            path="/favoritos"
            element={
              <Favoritos
                favorites={favorites}
                addOrRemoveFromFavs={addOrRemoveFromFavs}
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
