import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
const useStyles = makeStyles(theme => ({
  mt: {
    marginTop: 18
  },
  root: {
    display: "flex"
  },
  profileUpdate: {
    marginTop: theme.spacing(2)
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: "auto",
    backgroundColor: "white"
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  progress: {
    margin: theme.spacing(2)
  },
  title: {
    color: theme.palette.text.secondary,
    fontWeight: 700
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  form: {
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: green[700]
  }
}));

export default useStyles;