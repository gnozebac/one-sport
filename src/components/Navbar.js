import React from "react";
import logo from '../images/logo.png';
import './styles/Navbar.css'

import Container from '@material-ui/core/Container';

function Navbar (){
    return (
        <Container component="main" maxWidth="xs">
            <a href="/splash">
                <div  className="Navbar">
                    <img src={logo} alt= "logo"/>
                <span>OneSport</span>
                </div>
            </a>
        </Container>
        );

}

export default Navbar;