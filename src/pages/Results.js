import React from "react";
import Navbar from '../components/Navbar'

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

function Results (){
    return(        
        <React.Fragment>    
        <Navbar />
        <Container component="main" maxWidth="xs">
        <Grid
             container
                direction="column"
                justifyContent="flex-start"
              alignItems="flex-start"
        >
            <p>Holas 1</p>
            <p>Holas 2</p>
            <p>Holas 3</p>
            <TextField id="standard-basic" label="Standard" />
            
        </Grid>
        </Container>
        </React.Fragment>    
    );
}

export default Results;