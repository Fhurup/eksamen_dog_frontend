import Home from "./home";
import Breeds from "./Breeds";
import { NavLink, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import MyDogs from "./myDogs";
import AdminPage from "./AdminPage";
import BreedSearch from "./BreedSearch";
import AddDog from "./AddDog";
import App from "./App";

export default function Menu() {
  const [loggedIn, setLoggedIn] = useState(false);

  function setLogin(status) {
    setLoggedIn(status);
  }
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="header">
          <li>
            <NavLink exact activeClassName="active" to="/">
              Welcome
            </NavLink>
          </li>
          {!loggedIn && (
            <React.Fragment>
              <li>
                <NavLink exact activeClassName="active" to="/App">
                  Login
                </NavLink>
              </li>
            </React.Fragment>
          )}

          <li>
            <NavLink activeClassName="active" to="/breeds">
              Breeds
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/BreedSearch">
              Breed Search
            </NavLink>
          </li>
          {loggedIn && (
            <React.Fragment>
              <li>
                <NavLink activeClassName="active" to="/myDogs">
                  My Dogs
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/AdminPage">
                  AdminPage
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/addDog">
                  add Dog
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/Logout">
                  Logout
                </NavLink>
              </li>
            </React.Fragment>
          )}
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/App">
          <App setLogin={setLogin} />
        </Route>
        <Route path="/myDogs">
          <MyDogs />
        </Route>
        <Route path="/breeds">
          <Breeds />
        </Route>
        <Route path="/AdminPage">
          <AdminPage />
        </Route>
        <Route path="/BreedSearch">
          <BreedSearch />
        </Route>
        <Route path="/addDog">
          <AddDog />
        </Route>
        <Route path="/Logout">
          <App setLogin={setLogin} />
        </Route>
      </Switch>
    </div>
  );
}
