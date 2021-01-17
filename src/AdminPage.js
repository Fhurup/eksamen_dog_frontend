import facade from "./apiFacade";
import React, { useState, useEffect } from "react";

const AdminPage = () => {
  const [totalSearchData, setTotalSearchData] = useState("");

  useEffect(() => {
    facade.fetchTotalSearchData().then((data) => setTotalSearchData(data));
  }, []);

  const [searchData, setSearchData] = useState("");
  const [resultData, setbreedSearchData] = useState("");

  const handleFind = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setSearchData(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    facade
      .fetchSearchAmountBreedData(searchData)
      .then((data) => setbreedSearchData(data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleFind}
          value={searchData}
          placeholder="Breed"
        ></input>
        <button type="submit">Search</button>
      </form>
      <h3>Amount of searches is {resultData}</h3>
      <h3>Total amount of searches for breeds are {totalSearchData}</h3>
    </div>
  );
};

export default AdminPage;
