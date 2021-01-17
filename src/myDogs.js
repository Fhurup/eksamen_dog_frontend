import facade from "./apiFacade";
import React, { useState, useEffect } from "react";

const MyDogs = () => {
  const [myDogsData, setmyDogsData] = useState("");

  useEffect(() => {
    facade.fetchMyDogsData().then((data) => setmyDogsData(data.all));
  }, []);

  return (
    <div>
      {myDogsData &&
        myDogsData.map((dog, i) => {
          return (
            <div key={i}>
              <table>
                <tr>
                  <td>{dog.name}</td>
                </tr>
                <tr>
                  <td>{dog.dateOfBirth}</td>
                </tr>
                <tr>
                  <td>{dog.info}</td>
                </tr>
                <tr>
                  <td>{dog.breed}</td>
                </tr>
              </table>
            </div>
          );
        })}
    </div>
  );
};

export default MyDogs;
