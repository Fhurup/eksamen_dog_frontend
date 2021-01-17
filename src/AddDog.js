import facade from "./apiFacade";
import React, { useState } from "react";

const AddDog = () => {
  const initialValue = {
    name: "",
    dateOfBirth: "",
    info: "",
    breed: "",
  };

  const [newDog, setNewDog] = useState(initialValue);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setNewDog({ ...newDog, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    facade.fetchAddDogData(newDog);
    setNewDog(initialValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={newDog.name}
        onChange={handleChange}
        placeholder="Add name"
      />
      <br />
      <input
        name="dateOfBirth"
        value={newDog.dateOfBirth}
        onChange={handleChange}
        placeholder="Add dateOfBirth"
      />
      <br />
      <input
        name="info"
        value={newDog.info}
        onChange={handleChange}
        placeholder="Add generel info"
      />
      <br />
      <input
        name="breed"
        value={newDog.breed}
        onChange={handleChange}
        placeholder="Add breed"
      />
      <br />

      <button
        className="button buttonCategory buttonSort"
        type="submit"
        value="Submit"
      >
        Add
      </button>
    </form>
  );
};

export default AddDog;
