import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
    maxHeight: 300
  },
  heading: {
    fontSize: 14,
    fontWeight: "bold"
  },
  photo: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    marginRight: 15
  }
}));

export default useStyles;
