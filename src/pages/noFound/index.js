import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";
import useStyles from './style.js';


export default function NoFound() {

    const classes = useStyles();
    //HOOK NAVIGATION
    const history = useHistory();

    const onChangeScreen = () => history.push('/');

    return (
      <Grid aling='center' className={classes.root}>
        <Container className={classes.container}> 
          <Grid container direction="column" justify="center" alignItems="center" >
              <Grid item >
                <Typography align="center" variant="h4" className={classes.tittle}>No encotramos esa página</Typography>
              </Grid>
              <Grid item >
                <h1 className={classes.subtitlelineOne}>
                    <span className={classes.letter} >4</span>
                    <span className={classes.letter} >0</span>
                    <span className={classes.letter} >4</span>
                </h1>
              </Grid>
              <Grid item >
                <Typography align="center" variant="h5" className={classes.subtitlelineTwo}>
                    Lo sentimos, pero la página solicitada no fue encontrada
                </Typography>
              </Grid>
              <Grid item xs={5} container direction="column" justify="center" alignItems="stretch" >
                  <Button  
                      color='primary'
                      variant="contained"  
                      onClick={onChangeScreen}
                  >Inicio</Button>
              </Grid> 
          </Grid> 
        </Container>
      </Grid>
    );
}

