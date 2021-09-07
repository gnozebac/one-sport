import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { Link} from "react-router-dom";

import { Formik } from 'formik';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',    
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function CodeInput (){
    const classes = useStyles();

    return (
      <Container component="main" maxWidth="xs">
   
        <div className={classes.paper}>  
          <Typography component="h1" variant="h5">
            Busqueda
          </Typography>
          
          <Formik className={classes.form} noValidate>
              <>
            <Grid container spacing={3}>              
                <TextField
                  autoComplete="fcode"
                  name="code"
                  variant="outlined"
                  required
                  fullWidth
                  id="code"
                  label="Código"
                  autoFocus
                />
            </Grid>
            <Link to="/weight">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Buscar
            </Button>
            </Link>
            </>
          </Formik>
        </div>

      </Container>
    );
}

export default CodeInput;