import  React, {useEffect, useState } from "react";
import data from '../data.json'

function Card() {
  const [jsonData, setJsonData] = useState([])

  useEffect(() => {
    setJsonData(data);
  }, []);
  return (
    
    <div className="container" id="Productos">
      <h1 className="text-center mt-5 " > Nuestros Productos</h1>
    <div className="row">
      {jsonData.map(card => (
        <div className="col-md-4" key={card.id}>
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <img src={card.image} className= "card-img-top" alt="..."/>
              <p className="card-text">{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  )
}

export default Card;
