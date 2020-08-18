import React from "react";

export default function Header() {

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Harry Potter</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ml-5">
        <li class="nav-item">
          <a class="nav-link" href="#">Personagens</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Casas</a>
        </li>
      </ul>
    </div>
     </nav>
  );
}
