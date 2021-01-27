import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  const url = "http://localhost:3001/pets"

  function getData(){
    if (filters.type === "all"){
    fetch(url)
      .then(response => response.json())
      .then(data => setPets(data));
    } else if( filters.type === "dog"){
      fetch(url + '?type=dog')
        .then(response => response.json())
        .then(data => setPets(data));
    } else if (filters.type === "cat") {
      fetch(url + '?type=cat')
        .then(response => response.json())
        .then(data => setPets(data));
    } else if (filters.type === "micropig") {
      fetch(url + '?type=micropig')
        .then(response => response.json())
        .then(data => setPets(data));
    }
  }

  function onChangeType(e){
    setFilters({type:e})
  }

  console.log(filters)

  function handleAdoptPet(id) {
    const updatedPets = pets.map((pet) => {
      return pet.id === id ? { ...pet, isAdopted: true } : pet;
    });
    setPets(updatedPets);
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={getData}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={handleAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
