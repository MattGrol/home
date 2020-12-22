import React, { useState, useEffect, Profiler } from "react";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from "react-bootstrap/Card";
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'

 const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  };
const Interests = () => {
  return (
    <div id="interests" className="bg-white m-0 jumbotron jumbotron-fluid" style={{backgroundColor:'white'}}>
      <div className="container container-fluid">
        <div className="row">
            <div className="col d-lg-inline">
            <h1 className="display-4 pb-4 text-center">Interests</h1>
            {/*  */}
            <div className="row" style={divStyle}>
          
                <div className="col text-center">
                <p className="lead text-center" style={{fontSize:'28px'}}>Reading</p>
                <img src="https://svgshare.com/i/SYM.svg" width="90" height="90"/>
                <p className="lead text-center">
                 My passion for reading has been born since I was little. I prefer to read in the evening, before going to sleep. Favorite book genres are fantasy and adventure, such as Harry Potter and The Lord of the Rings. I hope to continue to cultivate this passion for a long time.
                </p>
                </div>
                <div className="col text-center">
                <p className="lead text-center" style={{fontSize:'28px'}}>Soccer</p>
                <img src="https://svgshare.com/i/SX4.svg" width="90" height="90"/>
                <p className="lead text-center">
                  I first picked up a soccer ball when I was 4 years old and have played the beautiful game since. I played competitively for A.S.D Roccella until the age of 18. Then, due to the University, I had to abandon this passion at a competitive level! Hope to start over soon.
                </p>
                </div>
                <div className="col text-center">
                <p className="lead text-center" style={{fontSize:'28px'}}>Videogames</p>
                <img src="https://svgshare.com/i/SY7.svg" width="90" height="90"/>
                <p className="lead text-center">
                  My passion for video games has also been born since I was little. When I have a little free time, I often spend it playing alone or with my friends, both on console (PS4) and on PC. The genres of video games I prefer are action with a nice storyline, but also sports and FPS.
                </p>
                </div>
	       <div className="col text-center">
                <p className="lead text-center" style={{fontSize:'28px'}}>CTF</p>
                <img src="https://svgshare.com/i/SY8.svg" width="90" height="90"/>
                <p className="lead text-center">
                  My passion for the Capture The Flag (CTF) challenge was born when I took part in the Cyberchallenge.IT 2020 project, at the Unical. There, I tried different game modes, starting with Jeopardy up to Attack-Defence. The types of challenges that I mainly love are those of Web Exploitation.
                </p>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Interests;
