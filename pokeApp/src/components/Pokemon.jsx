import React from 'react';
import "./Pokemon.scss";
import img from "../img/54-Psyduck.png";
import water from "../img/water.png";

const Pokemon = () => {
  return (
    <div className="pk-container">
        <div className="img-name">
            <div className="pokemon-img">
                <img src={img}alt=""/>
            </div>
            <div className="pokemon-name">
                <span>Psyduck</span>
                <img src={water} alt="" />
                <img src={water} alt="" />
            </div>
        </div>
        <div className="stats">
            <div className="stat"><span>HP: </span><span className='stat-value'>50</span></div>
            <div className="stat"><span>ATK: </span><span className='stat-value'>52</span></div>
            <div className="stat"><span>DEF: </span><span className='stat-value'>48</span></div>
            <div className="stat"><span>SPATK: </span><span className='stat-value'>65</span></div>
            <div className="stat"><span>SPDEF: </span><span className='stat-value'>50</span></div>
            <div className="stat"><span>SPEED: </span> <span className='stat-value'>55</span></div>
        </div>
    </div>
  );
}

export default Pokemon;