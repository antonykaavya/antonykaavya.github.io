import React, { Component } from 'react';

import about_me_headshot from '../images/headshot.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './AboutMe.css'

class AboutMe extends Component {
  render() {
    return (
        <div>
            <div class="split left" style={{left: '0', backgroundColor: '#123C69'}} >
                <div class="centered">
                <img class="about_me_headshot" src={about_me_headshot} alt="headshot"/>
                </div>
            </div>
            <div class="split right" style={{right: '0', backgroundColor: '#EEE2DC'}} >
                <div class="centered">
                <p class="about_me_text" style={{color: '#123C69', fontSize: '25px'}} >
                  Hey! My Name is Kaavya Antony. I'm currently working at Rapid7 as a Software
                  Engineer I, on the &nbsp;
                  <a href="https://www.rapid7.com/solutions/security-orchestration-and-automation/">
                   SOAR team. </a>
                   <br></br>
                   <br></br>
                   Outside of academics, I enjoy avidly watching football (Go Pats!!), doing Yoga, and reading memoirs.
                   <br></br>
                   <br></br>
                   Wanna know more? Contact me!
                   <br></br>
                   <br></br>                   
                   <a href="mailto:antonykaavya@gmail.com">
                     <FontAwesomeIcon
                        style={{fontSize: '50px', color: '#123C69', marginRight: '20px'}}
                        icon={faEnvelope} /></a>
                   <a href="https://www.linkedin.com/in/kaavya-antony-631678121/">
                     <FontAwesomeIcon
                        style={{fontSize: '50px', color: '#123C69', marginRight: '20px'}}
                        icon={faLinkedin} /></a>

                </p>
                </div>
            </div>
        </div>
    );
  }
}

export default AboutMe;
