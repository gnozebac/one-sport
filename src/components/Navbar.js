import React from "react";
import logo from '../images/logo.png';
import './styles/Navbar.css'

function Navbar (){
    return (
        <div >
            <div  className="Navbar">            
               <img src={logo} alt= "logo"/>
               <span>OneSport </span>               
            
            </div>
        </div>
        );

}

export default Navbar;