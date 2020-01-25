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
  btns: {
    display: "flex",
    justifyContent: "flex-end"
  }
});

export default useStyles;
