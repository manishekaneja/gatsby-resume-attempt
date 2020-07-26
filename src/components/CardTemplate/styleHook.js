import { makeStyles } from "@material-ui/core"
const useTemplateStyles = makeStyles(theme => ({
  root: {
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    maxHeight: "100vh",
    gridGap: 5,
    width: "100%",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "40px 40px 1fr 1fr 1fr",
  },
  header: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    "& button": {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      backgroundColor: "transparent",
      border: "none",
      outline: "none",
      paddingBottom: 10,
    },
    "& img": {
      margin: 0,
    },
  },
  upperSection: {
    "& h5": {
      fontSize: 40,
      textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      textAlign: "center",
      [theme.breakpoints.up("sm")]: {
        fontSize: 40,
        fontWeight: 400,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 48,
        fontWeight: 400,
      },
    },
  },
}))

export default useTemplateStyles
