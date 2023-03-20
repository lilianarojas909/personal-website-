import './About.css';
import Lili from './assets/lili.png';
import Kitty from './assets/KittyBitty.webp'
import React from "react";

function About(props) {
  return (
    <div className="About">
      <img className="Lili" src={Lili} alt="joe_mama" ></img>
      <div className="Items">
        <p className="Head"> I'm Liliana! </p>
        <p className="Body"> I am currently a sophomore @ UC Berkeley majoring in Computer Science and minoring in Chicano Studies. I am very interested in the intersection between computer science, environmental justice and ethnic studies. Scroll down to learn a little more about me!  </p>
      </div>
      
    </div>
  );
}


export default About;