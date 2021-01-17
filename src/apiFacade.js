import URL from "./settings";
import React, { useState, useEffect } from "react";

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}
const setToken = (token) => {
  localStorage.setItem("jwtToken", token);
};
const getToken = () => {
  return localStorage.getItem("jwtToken");
};
const loggedIn = () => {
  const loggedIn = getToken() != null;
  return loggedIn;
};
const logout = () => {
  localStorage.removeItem("jwtToken");
};

const parseRole = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

const setRole = (role) => {
  localStorage.setItem("role", role.roles);
};

const getRole = () => {
  return localStorage.getItem("role");
};

const setUser = (name) => {
  localStorage.setItem("name", name.username);
};

const getUser = () => {
  return localStorage.getItem("name");
};

const parseUser = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

function apiFacade() {
  /* Insert utility-methods from a latter step (d) here (REMEMBER to uncomment in the returned object when you do)*/

  const login = (user, password) => {
    const options = makeOptions("POST", true, {
      username: user,
      password: password,
    });
    return fetch(URL + "/api/login", options)
      .then(handleHttpErrors)
      .then((res) => {
        setToken(res.token);
        setRole(parseRole(res.token));
        setUser(parseUser(res.token));
      });
  };

  const fetchMyDogsData = () => {
    const options = makeOptions("GET", true); //True add's the token
    return fetch(URL + "/api/dogs/mydogs/" + getUser(), options).then(
      handleHttpErrors
    );
  };

  const fetchBreedsData = () => {
    const options = makeOptions("GET", true); //True add's the token
    return fetch(URL + "/api/dogs/breeds", options).then(handleHttpErrors);
  };

  const fetchSearchBreedData = (search) => {
    const options = makeOptions("GET", true); //True add's the token
    return fetch(URL + "/api/dogs/search/" + search, options).then(
      handleHttpErrors
    );
  };

  const fetchSearchAmountBreedData = (search) => {
    const options = makeOptions("GET", true); //True add's the token
    return fetch(URL + "/api/dogs/breedsearch/" + search, options).then(
      handleHttpErrors
    );
  };

  const fetchTotalSearchData = () => {
    const options = makeOptions("GET", true); //True add's the token
    return fetch(URL + "/api/dogs/totalsearches/", options).then(
      handleHttpErrors
    );
  };

  const fetchAddDogData = (dog) => {
    const options = makeOptions("POST", true, dog); //True add's the token
    return fetch(URL + "/api/dogs/adddog/" + getUser(), options).then(
      handleHttpErrors
    );
  };

  const makeOptions = (method, addToken, body) => {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    };
    if (addToken && loggedIn()) {
      opts.headers["x-access-token"] = getToken();
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  };
  return {
    makeOptions,
    setToken,
    getToken,
    loggedIn,
    login,
    logout,
    fetchMyDogsData,
    fetchBreedsData,
    fetchSearchBreedData,
    fetchSearchAmountBreedData,
    fetchTotalSearchData,
    fetchAddDogData,
    getRole,
  };
}
const facade = apiFacade();
export default facade;
