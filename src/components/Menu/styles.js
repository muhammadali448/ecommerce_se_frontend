import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));
