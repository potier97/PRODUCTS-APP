import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    //maxWidth: 345,
  },
  media: {
    height: 240,
    fontWeight: 'bold',
    color: '#520386'
  },
  text:{
    textOverflow: "ellipsis !important",
    //backgroundColor: 'red',
    overflow: "hidden",
    "-webkit-box-orient": "vertical"
  }, 
}));

export default useStyles;
