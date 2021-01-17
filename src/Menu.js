import Home from "./home";
import Breeds from "./Breeds";
import { NavLink, Route, Switch } from "react-router-dom";
import MyDogs from "./myDogs";
import AdminPage from "./AdminPage";
import BreedSearch from "./BreedSearch";
import AddDog from "./AddDog";

export default function Menu() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="header">
          <li>
            <NavLink exact activeClassName="active" to="/">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/breeds">
              Breeds
            </NavLink>
          </li>
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
            <NavLink activeClassName="active" to="/BreedSearch">
              Breed Search
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/addDog">
              add Dog
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
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
      </Switch>
    </div>
  );
}
