import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'; 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'; 
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'; 
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from "@material-ui/core/FormControl"; 
import Container from '@material-ui/core/Container';  
import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid'; 
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';  
//COMPONENTS
import MuiTextField from '../../components/muiTextField';
//AXIOS
import axios from 'axios';  
//NAVEGATION
import { useHistory, useParams } from "react-router-dom";  
//Styles
import useStyles from './style'

const initialState = {
  id: '',
  nameProduct: '',
  nameProductError: false,
  nameProductErrorMessage: '',
  idProduct: '',
  idProductError: false,
  idProductErrorMessage: '',
  count: 0,
  countError: false,
  countErrorMessage: '',
  mode: '',
  modeError: false,
  modeErrorMessage: '',
  description: '',
  descriptionError: false,
  descriptionErrorMessage: '',
  activateProduct: 'activo',
  activateProductErrror: false,
  activateProductErrrorMessage: '',
}

export default function newProduct() { 

  const classes = useStyles();
  //HOOK NAVIGATION 
  const history = useHistory();
  const { id } = useParams(); 
  const [state, setState] = useState(initialState) 
  const [isNew, setIsNew] = useState(false) 

  useEffect(() => {
    onNewData() 
  }, [])

  //Validar si el formulario es para un nuevo producto o modificar un producto existente
  const onNewData = () => { 
    if(id === 'new') {
      setIsNew(true)
      setState(initialState)
    }else{
      setIsNew(false)
      loadData()
    } 
  }

  //CARGAR LOS DATOS PARA SER MODIFICADOS
  const loadData = async () => {
    try {
      const res = await axios.get('/api/loadProduct', {
        idProduct: id,
      })
      console.log('Res', res)
      // setstate(prevState => ({
      //   ...prevState,
      //   id: res._id,
      //   nameProduct: res.nameProduct, 
      //   idProduct: res.idProduct, 
      //   count: res.count, 
      //   mode: res.mode,
      //   description: res.description,
      //   activateProduct: res.activateProduct
      // }))
    } catch (e) {
      console.log('Errror to load Product:', e)
    }
  }

  //VOLVER A LA PANTALLA DE PRODUCTOS
  const onChangeScreen = () => history.push('/products')

  //VALIDACIONES DEL PROCDUCTO PARAPODER SER MODIFICADO
  const validateProduct = () => {
    let isError = false; 
    let numbers = /^[0-9]+$/;

    //Nombre del producto
    if (state.nameProduct.length > 0) { 
      setState(prevState => ({
        ...prevState,
        nameProductError: false,
        nameProductErrorMessage: "",
      }))  
    } else { 
      setState(prevState => ({
        ...prevState,
        nameProductError: true,
        nameProductErrorMessage: "Ingrese el nombre del producto",
      }))  
      isError = true;
    }
    //ID PRODUCTO - REGISTRO INVIMA
    if (state.idProduct.length > 0) { 
      setState(prevState => ({
        ...prevState,
        idProductError: false,
        idProductErrorMessage: "",
      }))  
    } else { 
      setState(prevState => ({
        ...prevState,
        idProductError: true,
        idProductErrorMessage: "Ingrese el registro Invima del producto",
      }))  
      isError = true;
    }
    //CANTIDAD DEL PRODUCTO
    if (state.count !== '' && numbers.test(state.count)) { 
      setState(prevState => ({
        ...prevState,
        countError: false,
        countErrorMessage: "",
      }))  
    } else { 
      setState(prevState => ({
        ...prevState,
        countError: true,
        countErrorMessage: "Ingrese la cantidad de medicamentos en existencia",
      }))  
      isError = true;
    }
    //MODO DE PRESENTACIÓN
    if (state.mode.length > 0) {  
      setState(prevState => ({
        ...prevState,
        modeError: false,
        modeErrorMessage: "",
      }))  
    } else {  
      setState(prevState => ({
        ...prevState,
        modeError: true,
        modeErrorMessage: "Ingrese el tipo de presentación del producto",
      }))  
      isError = true;
    }
    //DESCRIPCIÓN DEL PRDUCTO
    if (state.description.length > 0) {
      setState(prevState => ({
        ...prevState,
        descriptionError: false,
        descriptionErrorMessage: "",
      }))   
    } else { 
      setState(prevState => ({
        ...prevState,
        descriptionError: true,
        descriptionErrorMessage: "Ingrese la descripción del producto",
      })) 
      isError = true;
    }
    return isError
  }

  //CAMBIO DE ENTRADAS DE TEXTO
  const handleChange = e => {  
    const { name, value } = e.target;
    setState(prevState => ({
        ...prevState,
        [name]:  value
    }));
  }  

  //ENVIAR CAMBIOS AL BACK
  const sendForm = async () => {
    try {
      const validate = validateProduct();
      if(!validate){
        if(isNew) {
          console.log('es nuevo')
          const res = await axios.post('/api/newProduct', {
            nameProduct: state.nameProduct, 
            idProduct: state.idProduct, 
            count: state.count, 
            mode: state.mode,
            description: state.description,
            activateProduct: state.activateProduct
          })
          console.log(res)
          //await onChangeScreen();
        }else{
          console.log('esta actualizando')
          const res = await axios.put('/api/editProduct', {
            _id: id,
            nameProduct: state.nameProduct, 
            idProduct: state.idProduct, 
            count: state.count, 
            mode: state.mode,
            description: state.description,
            activateProduct: state.activateProduct
          })
          console.log(res)
          await onChangeScreen();
        }
      }
    } catch (e) {
      console.log('Errro to create new product: ', e)
    }
  }



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

          <Grid item xs={12} className={classes.inputContainer}>
            <FormControl fullWidth>
              <MuiTextField
                  label="Nombre Producto"
                  margin="normal"
                  fullWidth
                  name="nameProduct"
                  variant="outlined"  
                  error={state.nameProductError}
                  helperText={state.nameProductErrorMessage} 
                  value={state.nameProduct} 
                  onChange={handleChange} 
              />
            </FormControl>
            <FormControl fullWidth>
              <MuiTextField
                  label="Registro Invima"
                  margin="normal"
                  fullWidth
                  name="idProduct"
                  variant="outlined" 
                  error={state.idProductError}
                  helperText={state.idProductErrorMessage} 
                  value={state.idProduct} 
                  onChange={handleChange} 
              />
            </FormControl>
            <FormControl fullWidth>
              <MuiTextField
                  label="Cantida del Producto"
                  margin="normal"
                  fullWidth
                  name="count"
                  variant="outlined" 
                  error={state.countError}
                  helperText={state.countErrorMessage} 
                  value={state.count} 
                  onChange={handleChange} 
              />
            </FormControl>
            <FormControl fullWidth>
              <MuiTextField
                  label="Presentación del Producto"
                  margin="normal"
                  fullWidth
                  name="mode"
                  variant="outlined"  
                  error={state.modeError}
                  helperText={state.modeErrorMessage} 
                  value={state.mode} 
                  onChange={handleChange} 
              />
            </FormControl>
            <FormControl fullWidth>
              <MuiTextField
                  label="Descripción"
                  margin="normal"
                  fullWidth
                  name="description"
                  variant="outlined"  
                  error={state.descriptionError}
                  helperText={state.descriptionErrorMessage} 
                  value={state.description} 
                  onChange={handleChange} 
              />
            </FormControl>
            <Grid item xs={12} className={classes.containerRadio}  align='center'> 
                <FormControl component="fieldset">
                  <RadioGroup row name="activateProduct" value={state.activateProduct} onChange={handleChange}>
                    <FormControlLabel className={classes.radioLabel} value="activo" control={<Radio classes={{ root: classes.radiobutton, checked: classes.checked }}/>} label="Activo" />
                    <FormControlLabel className={classes.radioLabel} value="inactivo" control={<Radio classes={{ root: classes.radiobutton, checked: classes.checked }}/>} label="Inactivo" />
                  </RadioGroup>
                </FormControl>
            </Grid>
            <Button 
                fullWidth  
                variant="contained"  
                color='primary'
                onClick={sendForm}>{"Guardar"}</Button>
          </Grid>
        </Container> 
      </main> 
    </div>
  );
}
 