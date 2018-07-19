import React, { Component } from 'react';
import './App.css';
import Gallery from './Gallery/Gallery.js';

class App extends Component {
  render() {
    return (
      <div>
      <Gallery/>
      </div>
    );
  }
}

export default App;
=================================================================================

{



  let arrTeamObj = [
             {
               num: '1',
               country: 'England',
               player_1: 'Aaron',
               player_2: 'Zoltan',
             },
             {
               num: '2',
               country: 'China & Taiwan',
               player_1: 'Justin',
               player_2: 'Albert',
             },
             {
               num: '3',
               country: 'Spain',
               player_1: 'Chris',
               player_2: 'Ricardo',
             },
             {
               num: '4',
               country: 'Ukraine',
               player1: 'Constantin',
               player2: 'Cristian',
             },
             {
               num: '5',
               country: 'Wales',
               player1: 'Dave',
               player2: 'NA',
             },
             {
               num: '6',
               country: 'Brasil',
               player1: 'Damany',
               player2: 'Raj',
             },
             {
               num: '7',
               country: 'Slovenia',
               player1: 'Vesna',
               player2: 'NA',
             },
             {
               num: '8',
               team: 'Italy',
               player1: 'Vicky',
               player2: 'NA',
             }
         ];
  
  function playerList() {
         return ['Cristian','Justin', 'Aaron', 'Zoltan', 'Albert', 'Chris', 'Ricardo',
                 'Constantin', 'Cristian', 'Dave', 'Damany', 'Raj', 'Vesna',
                 'Vicky'];
  }
  
  function teamList() {
      return ['England', 'China & Taiwan', 'Spain' , 'Ukraine', 'Wales','Brasil', 'Slovenia' , 'Italy'];
  }
  
  function missingPlayer() {
          arrTeamObj.forEach(function(country) {
                  if (team.player2 === 'NA') {
                         team.player2 = randomPlayer(playerList());
                          
                  }
          });
  }
  
  
  function randomPlayer(players){
         let randomNum = Math.floor(Math.random() * players.length)
         return players[randomNum];
  }
  
  function randomCountry
  
  
  