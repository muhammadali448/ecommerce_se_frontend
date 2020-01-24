import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  mt: {
    marginTop: 120
  },
  heading: {
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "center",
    paddingLeft: 20,
    backgroundColor: "#E7E7E7",
    marginBottom: 18
  },
  card: {
    display: "flex",
    flex: 1,
    marginBottom: 14
  },
  details: {
    flex: 0.7,
    display: "flex",
    flexDirection: "column"
  },
  cover: {
    flex: 0.3,
    width: "100%",
    backgroundSize: "contain"
  }
}));

export default useStyles;
