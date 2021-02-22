import { makeStyles } from "@material-ui/core/styles"; 

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

  margin:{
    marginLeft: theme.spacing(1),
    color: '#ffffff'
  },

  container: {
    //margin: 0,
    height: "100%", 
    display: "grid",
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: "center", 
  },

  title:{
    fontWeight: 'bold',
  },




  snsIcon: {
    width: "30px",
    height: "30px",
    // color: theme.palette.primary.main,

    [theme.breakpoints.down("xs")]: {
      width: "25px",
      height: "25px",
    },
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
  avatar: {
    width: "10em",
    height: "10em",
    boxShadow: "0px 0px 10px 1px #52038633",
    pointerEvents: 'none',
  },
  aboutText: {
    textAlign: 'justify !important',
    [theme.breakpoints.down("sm")]: {
      textAlign: 'center !important',
    },
  }, 
  content:{
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }
  

 
}));
export default useStyles;
