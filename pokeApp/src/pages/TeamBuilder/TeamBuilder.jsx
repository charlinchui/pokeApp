import React from 'react';
import Pokemon from '../../components/Pokemon';
import './TeamBuilder.scss';

const TeamBuilder = () => {
    return (
        <div className="container">
            <div className="right">

            </div>
            <div className="separator"></div>
            <div className="left">
                <div className="row">
                    <Pokemon />
                    <Pokemon />
                </div>
                <div className="row">
                    <Pokemon />
                    <Pokemon />
                </div>
                <div className="row">
                    <Pokemon />
                    <Pokemon /> 
                </div>
            </div>
        </div>
    )
}

export default TeamBuilder
