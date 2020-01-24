import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
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
  name: {
    textDecoration: "none",
    fontSize: 16,
    fontWeight: "bold"
  },
  cover: {
    flex: 0.3,
    width: "100%",
    backgroundSize: "contain"
  },
  btns: {
    display: "flex",
    justifyContent: "flex-end"
  }
}));

export default useStyles;
