import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    flex: 1,
    marginBottom: 14
  },
  details: {
    flex: 1,
    display: "flex"
  },
  main: {
    flex: 0.7,
    display: "flex",
    flexDirection: "column"
  },
  remove: {
    alignSelf: "flex-start"
  },
  margin: {
    margin: theme.spacing(1)
  },
  textField: {
    width: 150
  },
  price: {
    flex: 0.3
  },
  name: {
    textDecoration: "none",
    fontSize: 16,
    fontWeight: "bold"
  },
  cover: {
    flex: 0.2,
    width: "100%",
    backgroundSize: "contain"
  }
}));

export default useStyles;
