import { makeStyles } from "@material-ui/core"
const useAboutStyles = makeStyles(theme => ({
  root: {
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    gridGap: 5,
    minHeight: "100vh",
    maxHeight: "100vh",
    width: "100%",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "0px 0px 2fr 1fr 50px",
    // [theme.breakpoints.up("sm")]: {
    //   gridTemplateColumns: "0.2fr 5fr 5fr 0.2fr",
    //   gridTemplateRows: "200px 2fr 200px",
    //   flexDirection: "column",
    //   justifyContent: "center",
    // },
  },
  header: {},
  upperSection: {
    // [theme.breakpoints.up("sm")]: {
    //   gridColumn: "1/5",
    //   display: "block",
    // },
  },
  middleSection: {
    "& h5": {
      fontSize: 40,
      textAlign: "center",
      // [theme.breakpoints.up("sm")]: {
      //   fontSize: 40,
      //   fontWeight: 400,
      // },
      // [theme.breakpoints.up("lg")]: {
      //   fontSize: 48,
      //   fontWeight: 400,
      // },
    },
  },
  lowerSection: {
    textAlign: "center",
    gridColumn: "1/1",
    "& h5": {
      fontWeight: 300,
      // [theme.breakpoints.up("sm")]: {
      //   fontSize: 28,
      // },
    },
    // [theme.breakpoints.up("sm")]: {
    //   gridColumn: "1/5",
    // },
  },
  footer: {
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
      transform: "rotateZ(180deg)",
    },
  },
  textContainer: {
    margin: `${theme.spacing(2)}px auto`,
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    // [theme.breakpoints.up("sm")]: {
    //   margin: "auto",
    // },
  },
  imageContainer: {
    width: 250,
    height: 250,
    borderRadius: "50%",
    overflow: "hidden",
    boxShadow: theme.shadows[5],
    margin: `${theme.spacing(5)}px auto`,
    transition: theme.transitions.create(["width", "height"], {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.short,
    }),
    // [theme.breakpoints.up("sm")]: {
    //   margin: "auto",
    //   width: 300,
    //   height: 300,
    // },
    // [theme.breakpoints.up("lg")]: {
    //   margin: "auto",
    //   width: 350,
    //   height: 350,
    // },
  },
}))

export default useAboutStyles
