import React from 'react';
// import Cover from '../Cover/Cover';
 import "./Gallery.css";
import getTeamBox from '../TeamBox_/getTeambox.js';
import Cover from "../Cover/Cover.js"

export default function Gallery() {
    return (
        <div className="gallery">
            {
                getTeamBox().map(getTeamBox => {
                    return (
                        <Cover img={getTeamBox.image}
                               country={getTeamBox.country} 
                               player1={getTeamBox.player1} 
                               player2={getTeamBox.player2}
                               key={getTeamBox.id}/>
                    );
                })
            }
        </div>
    );
}