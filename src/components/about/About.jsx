import React from 'react';
import "./about.css";
import Data from "../../img/data.jpg"


const About = () => {
  return (
<div id='about' className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Data}
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Data Scientist and Web Developer
        </p>
        <p className="a-desc">
          You can say that I am a data crack and that data speaks to me. Well, the data
          actually speaks for itself and I just bring it out using visualisation and predict outcomes using Machine Learning!
        </p>
        <p className="a-desc">
          And, as a web developer I have a knack for making creative websites that stands out among the others! 
          Being a full stack developer I have aptitude to make simple yet effective web apps!
        </p>
        <div className="a-award">
          <div className="a-award-texts">
            <h4 className="a-award-title">What am I up-to now?</h4>
            <p className="a-desc">
              I will be pursuing my Master's in Data Science at University of Bristol during fall'22.
               I am actively looking for internship opportunities as a Data Scientist, Data Analyst or Machine Learning Engineer at the United Kingdom.
            </p>
          </div>
        </div>
        <div className="a-award">
          <div className="a-award-texts">
            <h4 className="a-award-title">Fun facts!</h4>
            <p className="a-desc">
              Besides hoarding data and analysing them and making webistes,
              I am a professional Bharatnatyam dancer, an Indian classical artform. I love watching movies and enjoy travelling and exploring new places!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
