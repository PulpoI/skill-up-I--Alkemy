import axios from "axios";
import swal from "@sweetalert/with-react";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (email === "" || password === "") {
      swal(<h2>Los campos no pueden estar vacios</h2>);
      return;
    }

    if (email !== "" && !regexEmail.test(email)) {
      swal(<h2>Debes escribir una direccion de correo válida</h2>);
      return;
    }
    if (email !== "challenge@alkemy.org" || password !== "react") {
      swal(<h2>Credenciales inválidas</h2>);
      return;
    }

    axios
      .post("http://challenge-react.alkemy.org/", { email, password })
      .then((res) => {
        swal(<h2>Perfecto, ingresaste correctamente!</h2>);

        const token = res.data.token;
        sessionStorage.setItem("token", token);
        navigate("/listado");
      });
  };

  let token = sessionStorage.getItem("token");

  return (
    <>
      {token && <Navigate replace to="/listado" />}
      <h2>Formulario de login</h2>
      <form onSubmit={submitHandler}>
        <label>
          <span>Correo electrónico</span> <br />
          <input type="text" name="email" />
        </label>
        <br />
        <label>
          <span>Contraseña</span> <br />
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Ingresar</button>
      </form>
    </>
  );
}

export default Login;
