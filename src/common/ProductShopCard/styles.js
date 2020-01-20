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
  cover: {
    flex: 0.3,
    width: "100%",
    backgroundSize: "contain"
  }
}));

export default useStyles;
