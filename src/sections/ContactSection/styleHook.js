import { makeStyles } from "@material-ui/core"
const useContactStyles = makeStyles(theme => ({
  root: {
    gridTemplateRows: "40px 40px 80px 1fr 0.5fr",
  },
  middleSection: {
    position: "relative",
    zIndex: 0,
    height: "100%",
  },
  lowerSection: {
    textAlign: "center",
    maxWidth: "80%",
    margin: "auto",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    zIndex: 1,
    justifyContent: "space-around",
    "& p": {
      fontSize: "1.2rem",
      textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      fontWeight: 400,
    },
    "& p span": {
      fontWeight: 500,
      color: "#65617D",
    },
  },
  footer: {
    height: "100%",
    display: "flex",
    justifyContent: "stretch",
    alignItems: "flex-start",
    flexDirection: "column",
    textAlign: "center",
    zIndex: 1,
    "& p": {
      margin: "auto",
      fontSize: "1.2rem",
      textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      fontWeight: 400,
    },
    "& p span": {
      fontWeight: 500,
      color: "#65617D",
    },
    "& div": {
      display: "flex",
      flex: 1,
      justifyContent: "space-around",
      minWidth: "50%",
      margin: "auto",
      alignItems: "center",
    },
  },
  imageContainer: {
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: theme.zIndex[0],
    margin: theme.spacing(0),
    transition: theme.transitions.create(["width", "height"], {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.short,
    }),
    [theme.breakpoints.up("sm")]: {
      top: 60,
    },
    [theme.breakpoints.up("lg")]: {
      right: 100,
    },
    "& img": {
      maxHeight: 350,
      [theme.breakpoints.up("sm")]: {
        maxHeight: 600,
      },
      [theme.breakpoints.up("lg")]: {
        maxHeight: 700,
      },
    },
  },
}))

export default useContactStyles
