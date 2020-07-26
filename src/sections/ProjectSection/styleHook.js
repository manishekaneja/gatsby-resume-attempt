import { makeStyles } from "@material-ui/core"
const useKnowledgeStyles = makeStyles(theme => ({
  root: {
    gridTemplateRows: "40px 40px 1fr 20px 180px",
  },
  middleSection: {
    height: "100%",
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    transition: theme.transitions.create(["width", "height", "margin"], {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.short,
    }),
  },
  lowerSection: {
    zIndex: 1,
    textAlign: "center",
    "& p": {
      fontSize: "1.1rem",
      margin: "auto",
      letterSpacing: 0,
      textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    "& p:first-child": {
      fontSize: "1.2rem",
      fontWeight: 500,
    },
    "& p span": {
      fontWeight: 400,
      color: "#65617D",
    },
  },
  footer: {
    position: "relative",
    textAlign: "center",
    height: "100%",
    zIndex: 0,
  },
  imageContainer: {
    position: "absolute",
    right: -8,
    bottom: 0,
    margin: theme.spacing(0),
    width: "100%",
    display: "flex",
    justifyContent: "center",
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
      margin: 0,
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

export default useKnowledgeStyles
