import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  mt: {
    marginTop: 18
  },
  mb: {
    marginBottom: 20
  },
  details: {
    display: "flex",
    flex: 1
  },
  card: {
    flex: 0.5
  },
  price: {
    fontSize: 16,
    fontWeight: "bold"
  },
  noOrders: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

export default useStyles;
