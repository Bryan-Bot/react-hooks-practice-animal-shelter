import React from "react";

import Pet from "./Pet";

function PetBrowser({pets}) {

  const renderPets = pets.map((pet)=><Pet pet={pet}/>)

  return <div className="ui cards">
    {renderPets}
    </div>;
}

export default PetBrowser;
