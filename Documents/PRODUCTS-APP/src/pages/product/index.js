import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'; 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'; 
import Typography from '@material-ui/core/Typography'; 
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar'; 
import Grid from '@material-ui/core/Grid'; 
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack'; 
import medicine from '../../assets/images/medicine.jpg'
//AXIOS
import axios from 'axios';  
//NAVEGATION
import { useHistory, useParams } from "react-router-dom";  
//Styles
import useStyles from './style'

export default function Product() { 

  const classes = useStyles();
  //HOOK NAVIGATION 
  const history = useHistory();
  const { id } = useParams(); 
  const [state, setstate] = useState({}) 

  useEffect(() => {
    getData() 
  }, [])

  const getData = async () => {
    try{
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      const data = await response.data
      setstate(data)
      console.log('Res', data)
    }catch(e){
      console.log('Error to get users: ', e)
    }
  } 

  const onChangeScreen = () => history.push('/products')

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar 
        color="secondary" 
        position="sticky" 
        //className={classes.appBar}
        elevation={8}>
        <Toolbar className={classes.toolbar} id="back-to-top-anchor">

           <Grid container direction="row" justify="flex-start" alignItems="center"> 
            <IconButton className={classes.margin} size="medium" onClick={onChangeScreen}  >
               <ArrowBackIcon />
            </IconButton>
            <Typography  noWrap variant="h6" component="h1" className={classes.tittle}>
              Volver
            </Typography>
          </Grid> 
        </Toolbar>
      </AppBar>
 
     
 
      {/* Principal Components*/}
      <main className={classes.main}>
        <Container className={classes.container} maxWidth="md"> 

        <Grid item container spacing={2} alignItems="center">
            <Grid item container md={3} direction="column" alignItems="center" spacing={2} >
              <Grid item>
                <Avatar alt="avatar" src={medicine} className={classes.avatar} imgProps={{ draggable: false}} />
              </Grid>
              <Grid item>
                <Typography variant="h4" align='center' className={classes.title}>{state.name}</Typography>
              </Grid> 
            </Grid>
            <Grid item md={9} container >
              <Grid item container className={classes.content}>
                <Typography variant="h6" className={classes.aboutText}>
                <span className={classes.title}>Registro Invima:</span>{` ${state.phone}`}
                </Typography>
              </Grid>
              <Grid item container className={classes.content}>
                <Typography variant="h6" className={classes.aboutText}>
                <span className={classes.title}>Modo de Presentación:</span>{` ${state.website}`}
                </Typography>
              </Grid>
              <Grid item container className={classes.content}>
                <Typography variant="h6" className={classes.aboutText}>
                <span className={classes.title}>STOCK:</span>{` ${state.id}`}
                </Typography>
              </Grid>
              <Grid item container className={classes.content}>
                <Typography variant="h6" className={classes.aboutText}>
                <span className={classes.title}>Disponibilidad:</span>{` ${state.id === 'activo' ? 'Si' : 'No' }`}
                </Typography>
              </Grid>
              <Grid item container className={classes.content}>
                <Typography variant="h6" className={classes.aboutText}>
                <span className={classes.title}>Acerca de:</span>{` ${state.name}`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container> 
      </main> 
    </div>
  );
}
 