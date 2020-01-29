import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
  },
  container: {
    marginTop: 18
  },
  mb: {
    marginBottom: theme.spacing(2)
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  },
  pos: {
    marginBottom: 12
  },
  sideLi: {
    backgroundColor: theme.palette.background.paper
  }
}));

export default useStyles;
