import { makeStyles } from "@material-ui/core/styles";
import routeImg from "../../assets/images/pills.jpg";


const useStyles = makeStyles((theme) => ({ 
  root: {
    textAlign: "center",
    backgroundImage: `linear-gradient(rgba(130, 65, 207, 0.6), rgba(157, 120, 198, 0.4)),  url(${routeImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    height: "100%", 
  },
  container: {
    height: "100%", 
    display: "grid",
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: "center", 
  },
  tittle: {
    color: "white",
    fontWeight: "bold",
  },
  subtitlelineOne: {
    alignItems: "center",
    position: "relative",
    fontSize: "150px",
    fontWeight: 800,
    margin: 0,
    padding: 0,
    color: "white",
    textTransform: "uppercase",
    letterSpacing: "-20px",
    marginLeft: "-20px",
  },
  subtitlelineTwo: {
    color: "white",
    marginBottom: theme.spacing(2),
    fontWeight: "bold",
  },
  letter: {
    textShadow: "-8px 0px 0px gray",
  }, 
}));
export default useStyles;
