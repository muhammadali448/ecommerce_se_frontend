import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  mt: {
    marginTop: 18
  },
  mb: {
    marginBottom: 20
  },
  noOrders: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

export default useStyles;
