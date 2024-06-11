import React from 'react'

export const Carousel = () => {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://stjohns.mx/wp-content/uploads/2021/06/Los-mejores-juegos-para-nin%CC%83os-1-1200x675.png" className="d-block w-100" alt="..." style={{maxHeight: "550px"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://inoplay.com.mx/juegos-infantiles/fotos/juegos-modulares-de-exterior/juegos-de-exterior-para-40-usuarios.jpg" className="d-block w-100" alt="..." style={{maxHeight: "550px"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://inoplay.com.mx/juegos-infantiles/fotos/juegos-modulares-de-exterior/islas-de-juegos-modulares-20-usuarios.jpg" className="d-block w-100" alt="..." style={{maxHeight: "55ñ0px"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}
