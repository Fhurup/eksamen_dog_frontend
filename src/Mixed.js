import facade from "./apiFacade";
import React, { useState, useEffect } from "react";

const Mixed = () => {
  const [mixedData, setMixedData] = useState("");

  useEffect(() => {
    facade.fetchMixedData().then((data) => setMixedData(data));
  }, []);

  return (
    <div>
      <h2>Mixed Data Received from server</h2>
      <h3>{mixedData.eName}</h3>
      <h3>{mixedData.eCity}</h3>
      <h3>{mixedData.joke}</h3>
      <h3>{mixedData.status}</h3>
      <h3>{mixedData.pName}</h3>
      <h3>{mixedData.Population}</h3>
    </div>
  );
};

export default Mixed;
