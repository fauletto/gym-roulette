import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useStyles from '../config/theme-signinup';
import Container from '@material-ui/core/Container';
import Copyright from '../components/Copyright/index';
import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from '../components/Firebase';

export default withRouter(withFirebase(SignUp));

function SignUp(props) {
  const classes = useStyles();

  const initialUser = {id: null, email: '', password: '', error: null, auth: null}

  const [user, setUser] = useState(initialUser);

  const handleChange = e =>{
    const { name, value } = e.target;
    setUser({...user, [name]: value})
  };

  const handleSubmit = e =>{
    props.firebase.auth.createUserWithEmailAndPassword(user.email, user.password)
    .then(authUser=>{
      setUser(initialUser);
      props.history.push('/dashboard');
    })
    .catch(error =>{
      setUser({...user, error: error.message})
    });
  };

  const isValid = user.email === '' || user.password === '';

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up for a GymRoulette Account
        </Typography>
        <form className={classes.form} noValidate onSubmit= {e => e.preventDefault()}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <Typography className={classes.error}>
            {user.error ? user.error : ''}
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
            disabled={isValid}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" color="black">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/" variant="body2" color="black">
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}