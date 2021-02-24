import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: "bold",
    color: "#fff",
    display: "flex",
    height: "100%",
    boxSizing: "border-box",
  },
  backdrop: {
    width: "100%",
    height: "100%",
    position: "fixed",
    left: 0,
    top: 0,
    opacity: 0.6,
    zIndex: 2,
    backgroundColor: "#9D78C6",
  },
  container: {
    height: "100%",
    zIndex: 3,
    display: "grid",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "red",
  },
  video: {
    minWidth: "100%",
    width: "100%",
    height: "-webkit-fill-available",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1,
    objectFit: "cover",
    display: "flex",
  },
  link: {
    color: "#520386",
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": {
      color: "#8241cf",
      textDecoration: "underline",
    },
  },
  buttonContainer: {
    marginBottom: 6,
    marginTop: 3,
  },
}));
export default useStyles;
