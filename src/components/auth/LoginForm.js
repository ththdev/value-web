import React from "react";
import apiClient from "lib/apiClient";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const username = React.useRef();
  const password = React.useRef();

  const history = useHistory();

  async function login(e) {
    e.preventDefault();

    await apiClient
      .post(
        "/accounts/login/",
        JSON.stringify({
          username: username.current.value,
          password: password.current.value,
        })
      )
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        history.go(0);
      })
      .catch((e) => console.log(e.response));
  }

  return (
    <form onSubmit={login}>
      <input type="text" placeholder="username" ref={username} />
      <input type="password" placeholder="password" ref={password} />
      <input type="submit" value="Login" />
    </form>
  );
};

export default LoginForm;
