import React from "react";
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import Entry from '../components/Entry'

function Splash (){
    return(        
        <React.Fragment>    
            <Navbar />
            <Intro />
            <Entry />        
        </React.Fragment>
    );
}

export default Splash;