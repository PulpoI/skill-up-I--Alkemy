import { Link } from "react-router-dom";
import Buscador from "./Buscador";

function Header(props) {
  return (
    <>
      {/* <nav className="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page">
                  {" "}
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/listado" class="nav-link">
                  Listado
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/contacto" class="nav-link">
                  Contacto
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/favoritos" class="nav-link">
                  Favoritos
                </Link>
              </li>
              <li>
                <span className="text-success">
                  {props.favorites.length > 0 && (
                    <>Peliculas en Favoritos: {props.favorites.length}</>
                  )}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Peliculas
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page">
                  {" "}
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/listado" class="nav-link">
                  Listado
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/contacto" class="nav-link">
                  Contacto
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/favoritos" class="nav-link">
                  Favoritos
                </Link>
              </li>
              <li class="nav-item">
                <span className="text-success nav-link">
                  {props.favorites.length > 0 && (
                    <>Peliculas en Favoritos: {props.favorites.length}</>
                  )}
                </span>
              </li>
            </ul>
          </div>
          <Buscador />
        </div>
      </nav>
    </>
  );
}

export default Header;
