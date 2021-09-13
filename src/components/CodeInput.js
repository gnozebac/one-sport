import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useFormik} from 'formik';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function CodeInput() {
  const formik = useFormik({
    initialValues: {
      code: ""
    },
    onSubmit: x => console.log(x)
  });

  const classes = useStyles();  
  const wrapper = {
    textDecoration: 'none'
  };


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>        
   
        <form className={classes.form} >
        <Typography component="h1" variant="h5">
          Ingresar código
        </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="code"
            label="Código"
            name="code"
            autoComplete="code"
            autoFocus
            onChange ={formik.handleChange('code')}
            value={formik.values.code}
          />
          <Link to={{
            pathname: '/weight/current',
            state: {
              code: formik.values.code
            }
            }} style={wrapper} 
          >
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
        </form>

      </div>
      
    </Container>
  );
}