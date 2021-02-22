import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'; 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'; 
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import FormControl from "@material-ui/core/FormControl"; 
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar'; 
import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'; 
import AddIcon from '@material-ui/icons/Add';
import Logo from '../../assets/images/logo.png' 
import { useSnackbar } from 'notistack';
//components
import ScrollTop from '../../components/scrollTop';
import ProductCard from '../../components/productCard'
//AXIOS
import axios from 'axios'; 
//MEDIA QUERY
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

//NAVEGATION
import { useHistory } from "react-router-dom";  
//Styles
import useStyles from './style'
 
 

export default function Products(props) { 

  const classes = useStyles();
  //HOOK NAVIGATION 
  const history = useHistory();
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm')); 
  const [state, setstate] = useState([])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('nombre')


  useEffect(() => {
    getData() 
  }, [])

  const getData = async () => {
    try{
      const res = await axios.get('/api/products')
      const data = await res.data.products
      //console.log('res', data)
      setstate(data)
      console.log('search', search)
    }catch(e){
      console.log('Error to get users: ', e)
    }
  }

  const onChangeText = e => setSearch(e.target.value)
  
  const onChangeFilter = e => setFilter(e.target.value)

  const onChangeScreen = () => history.push('newProduct/new')

  const onViewProduct = e => history.push({ pathname: `/product/${e}` })

  const onEditProduct = e => history.push({ pathname: `/newProduct/${e}` })


  const onDeleteProduct = async e => {
    try{
      const id = e 
      const res = await axios.post('/api/deleteProduct', { id: id}) 
      //const data = await res.data
      //console.log('Res', data, data)
      if(res.status === 200){
        enqueueSnackbar('Producto Eliminado', { 
          variant: 'error',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'center',
          }
        });
        await getData()
      }
    }catch(e){
      console.log('Error to delete users: ', e)
    }
  }


  const handleSearch = async (e) => {
    try { 
      if (e.key === "Enter") { 
        const res = await axios.post('/api/searchProduct', { filter: filter, query: search })
        const data = await res.data.products 
        console.log(data)
        //setstate(data)
        setSearch('')
      }
    }catch (error) {
      console.log('Error to find products: ', error)
    }
  }; 

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar 
        color="secondary" 
        position="sticky"  
        elevation={8}>
        <Toolbar className={classes.toolbar} id="back-to-top-anchor">

          {isDesktop ? <Grid container direction="row" justify="space-between" alignItems="stretch"> 
            <Grid item xs={8} container direction="row" justify="flex-start" alignItems="center">
            <Avatar alt="logo" src={Logo} />
              <div className={classes.search}>
                <div className={classes.searchIcon}> <SearchIcon /> </div>
                <InputBase
                  placeholder="Buscar…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  onKeyPress={handleSearch}
                  value={search}
                  onChange={onChangeText}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div> 
            </Grid>
            <Typography  noWrap variant="h6" component="h1" className={classes.tittle}>
              Productos
            </Typography>
          </Grid>: 
          <Grid container direction="column" justify="center" alignItems="stretch" >
            <div className={classes.search}>
              <div className={classes.searchIcon}> <SearchIcon /> </div>
              <InputBase
                placeholder="Buscar…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onKeyPress={handleSearch}
                value={search}
                onChange={onChangeText}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Grid>}
        </Toolbar>
      </AppBar>
 
     
 
      {/* Principal Components*/}
      <main className={classes.main}>
        <Container>
         <div className={classes.mainSpace}/>
         <Grid item xs={12} className={classes.containerRadio} align='center'> 
              <FormControl component="fieldset">
              <Typography  noWrap variant="h6" component="h1" className={classes.subtittle}>Filtros</Typography>
                <RadioGroup row name="activateProduct"  value={filter} onChange={onChangeFilter} className={classes.radioContainer}>
                  <FormControlLabel className={classes.radioLabel} value="nombre" control={<Radio classes={{ root: classes.radiobutton, checked: classes.checked }}/>} label="Nombre" />
                  <FormControlLabel className={classes.radioLabel} value="presentación" control={<Radio classes={{ root: classes.radiobutton, checked: classes.checked }}/>} label="Presentación" />
                  <FormControlLabel className={classes.radioLabel} value="registro" control={<Radio classes={{ root: classes.radiobutton, checked: classes.checked }}/>} label="Registro Invima" />
                </RadioGroup>
              </FormControl>
          </Grid>

          {/* <div>hola mundo</div>  */} 
          <Grid container spacing={3} className={classes.containerProducts}>
            {state.map((product, index) => 
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Grid container>
                  <ProductCard 
                    name={product.name}
                    record={product.id}
                    amount={product.count}
                    mode={product.mode}
                    disponible={product.activateProduct}
                    description={product.description}
                    openCard={() => onViewProduct(product._id)}
                    editCard={() => onEditProduct(product._id)}
                    deleteCard={() => onDeleteProduct(product._id)}
                  />
                </Grid>
              </Grid>
            )}
          </Grid>
         <div className={classes.mainSpace}/>


        </Container>
        <Fab color="secondary" size="large" className={classes.plus} onClick={onChangeScreen}>
          <AddIcon />
        </Fab>
      </main>


      <ScrollTop {...props}>
        <Fab color="primary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>

      

    </div>
  );
}
 