import React from 'react'

const NavBar = () => {

  
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Diverlissan 🎈</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <a className="nav-link active" aria-current="page" href="#">Inicio 🏡</a>
        <a className="nav-link" href="#Nosotros" >Sobre Nosotros 😎</a>
        <a className="nav-link" href="#Productos">Productos 🏰</a>
        <a className="nav-link" href="#Contacto">Contacto 📞</a>
      </div>
    </div>
  </div>
</nav>
    
  )
}

export default NavBar