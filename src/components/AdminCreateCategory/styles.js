import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  container: {
    marginTop: 18
  },
  form: {
    marginTop: theme.spacing(1)
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  paperA: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  }
}));

export default useStyles;
