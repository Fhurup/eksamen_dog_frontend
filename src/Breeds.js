import facade from "./apiFacade";
import React, { useState, useEffect } from "react";

const Breeds = () => {
  const [breedsData, setBreedsData] = useState("");

  useEffect(() => {
    facade.fetchBreedsData().then((data) => setBreedsData(data.dogs));
  }, []);

  return (
    <div>
      {breedsData &&
        breedsData.map((breed, i) => {
          return (
            <div key={i}>
              <table>
                <tr>
                  <td>{breed.breed}</td>
                </tr>
              </table>
            </div>
          );
        })}
    </div>
  );
};

export default Breeds;
