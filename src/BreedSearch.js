import facade from "./apiFacade";
import React, { useState, useEffect } from "react";

const BreedSearch = () => {
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
      .fetchSearchBreedData(searchData)
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
      <h2>Breed:</h2>
      <h4>{resultData.breed}</h4>
      <h3>Generel info: </h3>
      <h4>{resultData.info}</h4>
      <h3>Wikipedia entry: </h3>
      <h4>{resultData.wikipedia}</h4>
      <img src={resultData.image}></img>
      <h3>Random dog facts</h3>
      <h4>
        {resultData.facts &&
          resultData.facts.map((fact, i) => {
            return (
              <div key={i}>
                <table>
                  <tr>
                    <td>{fact}</td>
                  </tr>
                </table>
              </div>
            );
          })}
      </h4>
    </div>
  );
};

export default BreedSearch;
