import React from 'react'; 
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid'; 
import { useHistory } from "react-router-dom";
//STYLES
import useStyles from './style';
//VIDEO
import medicine from "../../assets/videos/medicine.mp4"; 
  
export default function Home() {
 
  const classes = useStyles(); 
  //HOOK PARA NAVEGAR
  const history = useHistory();

  const onChangeScreen = () => history.push('products')

  const onNewProduct = () => history.push('newProduct/new')

  return (    
    <Grid aling='center' className={classes.root}>
      <video autoPlay loop muted id="videoCidu" className={classes.video} src={medicine} type="video/mp4"/>   
      <CssBaseline /> 
      <div className={classes.backdrop} /> 
      <Container className={classes.container}>
        <Grid container item direction="column" justify="center" alignItems="center" >   
          <h1> Mini-App de productos {' '}
            <a
              className={classes.link}
              href="https://nutrabiotics.info/productos/"
              target="_blank"
              rel="noreferrer noopener"
            >Nutrabiotics</a> 
          </h1>
          <Grid item xs={8} 
              className={classes.buttonContainer}
              container
              direction="column"
              justify="center"
              alignItems="stretch"> 
          <Button 
            onClick={onChangeScreen} 
            variant="contained" 
            color='secondary' 
            >IR</Button>
          </Grid>
          <Grid item xs={8} 
              className={classes.buttonContainer}
              container
              direction="column"
              justify="center"
              alignItems="stretch"> 
          <Button 
            onClick={onNewProduct} 
            variant="contained" 
            color='primary' 
            >AGREGAR NUEVO PRODUCTO</Button>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
} 