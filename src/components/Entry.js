import React from "react";
import Button from '@material-ui/core/Button';
import './styles/Entry.css'


import Container from '@material-ui/core/Container';
function Navbar (){
    return (
      <Container component="main" maxWidth="xs">
      
        <Button variant="contained" color="primary">
        Entrar
      </Button>
      </Container>
        );

}

export default Navbar;