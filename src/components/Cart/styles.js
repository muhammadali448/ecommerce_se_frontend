import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
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
  price: { color: "#f50057" },
  proceed: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E7E7E7"
  }
});

export default useStyles;
