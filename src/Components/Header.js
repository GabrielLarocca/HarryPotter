import React from "react";

export default function Header() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">Harry Potter</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ml-5">
        <li className="nav-item">
          <a className="nav-link" href="#">Personagens</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Casas</a>
        </li>
      </ul>
    </div>
     </nav>
  );
}
