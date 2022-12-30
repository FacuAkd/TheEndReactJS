import React from 'react'
import CardWidget from './CardWidget'
import "../sass/Navbar.css"
import imagenes from "../Imagen/1.jpg"

const Navbar = () => {
  return (
  <div> 
  <div class="conteiner  w-100 superposicion"> 
  <nav class="navbar navbar-expand-lg menu">
    <div class="container-fluid">
      <nav class="navbar">
        <div class="container">
          <a class="navbar-brand" href="https://www.thebeatles.com/"target="_blank">
          <img src={imagenes} alt="The Beatles" width="60" height="auto"/></a>
        </div>
      </nav>
      <button class="navbar-toggler bg-warning navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ">
          <a class="nav-link menuColor" aria-current="page" href="">Home</a>
          <a class="nav-link menuColor" href="">Inicios</a>
          <a class="nav-link menuColor" href="">Beatlemania</a>
          <a class="nav-link menuColor" href="">Culminacion</a>
          <a class="nav-link menuColor" href="">Reencuentro</a>
          <a class="nav-link menuColor" href="">Productos</a>
          <a class="nav-link menuColor" href="#">10<CardWidget/></a>
        </div>
      </div>
    </div>
  </nav>
</div>
</div> 



    
  )
}

export default Navbar


{/*<div>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>    
    
    <nav class=" position-fixed w-100 navbar navbar-expand-lg navbar-light bg-light superposicion">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">THE END</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Inicios</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Beatlemania</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Culminacion</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Reencuentro</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Productos</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link" href="#">10<CardWidget/></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>*/}