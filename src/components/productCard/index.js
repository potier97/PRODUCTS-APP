import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { PhotoThemes }  from '../../const'
//STYLES
import useStyles from './style'

export default function productCard(props) {
  
  const classes = useStyles();
  const {
    openCard,
    editCard,
    deleteCard,
    name= 'Medicina A',
    amount= 3,
    description= 'Lorem Ipsum Dolor fen',
    mode= 'Tabletas',
    record= 'a1a2a3a4',
    disponible= 'activo'
  } = props;

  return (
    <Card className={classes.root} elevation={6}>
        <CardMedia
          className={classes.media}
          //image="https://picsum.photos/id/237/200/300"
          image={`https://source.unsplash.com/featured/${PhotoThemes}/${name}`}
          title={name} />
        <CardContent>
          <Typography gutterBottom noWrap variant="h5" component="h2" className={classes.textDots}>{name}</Typography>
          <Typography gutterBottom noWrap variant="h6" component="h2" className={classes.textDots}>{`Cantidad: ${amount}`}</Typography>
          {/* <Typography gutterBottom noWrap variant="h6" component="h2" className={classes.textDots}>{`Presentación: ${mode}`}</Typography> */}
          {/* <Typography gutterBottom noWrap variant="body1" component="h3" className={classes.textDots}>{`RI: ${record}`}</Typography> */}
          <Typography gutterBottom noWrap variant="body1" component="h3" className={classes.textDots}>{`Disponibilidad: ${disponible === 'activo' ? 'Si' : 'No'}`}</Typography>
          <Typography noWrap variant="body2" color="textSecondary" component="p" className={classes.textDots}>{description}</Typography>
         
        </CardContent>
      <CardActions>
          <Button size="small" color="primary" variant="contained" onClick={openCard} >Saber Más</Button> 
          <Button size="small" color="primary" variant="contained" onClick={editCard} >Editar</Button> 
          <Button size="small" color="warning" variant="contained" onClick={deleteCard} >Eliminar</Button> 
        </CardActions>
    </Card>
  );
}