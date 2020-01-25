import { makeStyles } from "@material-ui/core/styles";
import { green } from '@material-ui/core/colors';
const useStyles = makeStyles(theme => ({
  mt: {
    marginTop: 18
  },
  mb: {
    marginBottom: 18
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
  wrapper: {
    margin: theme.spacing(1),
    position: "relative"
  },
  buttonProgress: {
    color: "red",
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  checkout: {
    display: "flex",
    flexDirection: "column"
  },
  buy: {
    marginTop: 16,
    alignSelf: "center"
  },
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700]
    }
  },
  price: { color: "#f50057" },
  proceed: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E7E7E7"
  }
}));

export default useStyles;
