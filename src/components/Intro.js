import React from "react";
import './styles/Intro.css';


import Container from '@material-ui/core/Container';

function Navbar (){
    return (
        <Container component="main" maxWidth="xs">
           <iframe 
           width="560" 
           height="315" 
           src="https://www.youtube.com/embed/vi1-4fcX_ig" 
           title="YouTube video player" 
           frameborder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
           allowfullscreen></iframe>
        </Container>
        );
}

export default Navbar;