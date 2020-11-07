import React, { Component } from 'react'

import logo from '../images/logo_big.png';
import headshot from '../images/headshot.png';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div>
                <div class="split left">
                    <div class="centered">
                        <img src={logo} alt="logo"/>
                    </div>
                </div>
                <div class="split right">
                    <div class="centered">

                    <img class="headshot" src={headshot} alt="headshot"/>
                    <p class="landing_page_text" 
                        style={{fontSize: '35px'}}
                    > Hello! I'm Kaavya, a software
                    engineer, based in Boston, MA. </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
