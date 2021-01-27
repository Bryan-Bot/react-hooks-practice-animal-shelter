import React ,{useState} from "react";

function Pet({pet, onAdoptPet}) {

  
  
  function handleAdoptedClick() {
    onAdoptPet(pet.id);
  }
  return (
    <div className="card" key={pet.id}>
      <div className="content">
        <span className="header">
          {pet.gender === "female" ? "♀" : "♂"}
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age} years old</p>
          <p>Weight: {pet.weight} lbs</p>
        </div>
      </div>
      <div className="extra content">
        {pet.isAdopted ? (
          <button className="ui disabled button">Already adopted</button>
        ) : (
            <button className="ui primary button" onClick={handleAdoptedClick}>
              Adopt pet
            </button>
          )}
      </div>
    </div>
  );
}

export default Pet;
