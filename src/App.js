import React, { useState, useEffect } from "react";
import facade from "./apiFacade";
import { useHistory } from "react-router-dom";

function LogIn({ login }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  };
  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onChange={onChange}>
        <input placeholder="User Name" id="username" />
        <input placeholder="Password" id="password" />
        <button className="button buttonIn" onClick={performLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

function App(props) {
  let history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    props.setLogin(false);
    history.push("/App");
  }, []);

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  };
  const login = (user, pass) => {
    facade.login(user, pass).then((res) => props.setLogin(true));
    history.push("/");
  };

  return (
    <div>
      {!loggedIn ? (
        <LogIn login={login} />
      ) : (
        <div>
          <button className="button" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
export default App;
