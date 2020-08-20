import React from 'react';


export default function CardsC(houses){

return(
    <div className="col-md-4">
        <div className="card">
            <div className="card-body">
            {console.log(houses)}
                <h5 className="card-title text-center">{houses.houses.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>Mascot: </b>{houses.houses.mascot}</li>
                <li className="list-group-item"><b>Colors: </b>{houses.houses.colors.join(' | ')}</li>
                <li className="list-group-item"><b>Founder: </b>{houses.houses.founder}</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
        </div>
    </div>
)}
