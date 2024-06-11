import React from "react";
import "./About.css";

export const About = () => {
  return (
    

    <div className="cont container-fluid section mt-5" id="Nosotros">
      <div className="row align-items-center mt-5">
        <div className="col-md-6 mt-4">
          {/* <img src="https://img.freepik.com/vector-premium/saltar-trampolin-ninos-juegos-ninos-activos-ilustracion-dibujos-animados-juegos-infantiles_80590-6608.jpg?w=740" alt="Imagen" className="img-fluid" /> */}
          <img src="/images/kids_saltando.png" alt="images_kids" className="img-fluid" />
        </div>
        <div className="col-md-6" >
          <h2>Sobre nosotros</h2>
          <p>En Diverlissan, nos dedicamos a hacer que cada evento sea una
      experiencia inolvidable. Somos una empresa comprometida con la diversión
         y la satisfacción de nuestros clientes, y ofrecemos una
         amplia gama de juegos y equipos de alquiler para todo tipo de ocasiones.
         Desde fiestas infantiles hasta eventos corporativos, nuestra colección
         es perfecta para agregar un toque de emoción y
         entretenimiento a cualquier celebración.</p>
        </div>
      </div>
    </div>
   
  );
};
