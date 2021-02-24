import { fade, makeStyles } from "@material-ui/core/styles"; 

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },

  main: {
    flex: 1,
    background: "#e4e4e4", 
  }, 
  mainSpace:{
    flex: 1,
    height: '24px'
  },

  plus:{
    position: 'fixed',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
  },

   
  toolbar: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }, 
 
  tittle: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(1),
    },
  }, 
  subtittle: {
    color: '#461193',
    fontWeight: 'bold'
  }, 
  radioContainer:{
    justifyContent: 'center',
    alignItems: 'center'
  },

  resetIcon:{
    color: '#fff',
    backgroundColor: '#9D78C6',
    '&:hover': {
      backgroundColor: '#9D78C6',
    },
  },

 

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },


  containerProducts:{
    //margin: 0 
  },

  containerRadio:{
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },





  radiobutton: {
    color: "#461193",
    "&$checked": {
      color: "#461193",
      "&:hover": {
        color: "#461193",
        backgroundColor: "#46119320",
      },
    },
    "&:hover": {
      color: "#461193",
      backgroundColor: "#46119320",
    },
  },
  checked: {},
  radioLabel:{
    color: "#461193",
    fontWeight: 'bold',
  }


 
}));
export default useStyles;
