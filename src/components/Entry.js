import React from "react";
import Button from '@material-ui/core/Button';
import './styles/Entry.css'
import { Link } from 'react-router-dom';

import Container from '@material-ui/core/Container';
function Navbar() {
  const wrapper = {
    textDecoration: 'none'
  };
  return (
    <Container component="main" maxWidth="xs">
      <Link to="/search" style={wrapper}>
        <Button
          variant="contained"
          color="primary"
        >
          Entrar
        </Button>
      </Link>
    </Container>
  );

}

export default Navbar;