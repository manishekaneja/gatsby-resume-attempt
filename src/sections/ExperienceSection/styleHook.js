import { makeStyles } from "@material-ui/core"
const useKnowledgeStyles = makeStyles(theme => ({
  root: {
    gridTemplateRows: "40px 40px 1fr 0.5fr 0.7fr",
  },
  upperSection: {
    "& h5": {
      fontSize: 40,
      textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      textAlign: "center",
    },
  },
  middleSection: {
    height: "100%",
    position: "relative",
    transition: theme.transitions.create(["width", "height", "margin"], {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.short,
    }),
    "&>.tags": {
      position: "absolute",
      top: 25,
      left: 10,
    },
    "&>.tags>div:first-child": {
      transform: "translateX(0px) translateY(20px)",
    },
    "&>.tags>div:nth-child(2)": {
      transform: "translateX(7px) translateY(70px)",
    },
    "&>.tags>div:nth-child(3)": {
      transform: "translateX(14px) translateY(120px)",
    },
  },
  lowerSection: {
    textAlign: "center",
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    padding: 10,
    "& p": {
      fontSize: "1.1rem",
      letterSpacing: 0,
      fontWeight: 500,
      textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    "& p span": {
      fontWeight: 500,
      color: "#65617D",
    },
  },
  footer: {
    textAlign: "center",
    padding: 10,
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    "& p": {
      fontSize: "0.98rem",
      margin: "auto",
      marginBottom: "0.5rem",
      letterSpacing: 0,
      fontWeight: 300,
    },
    "& p span": {
      fontWeight: 400,
      color: "#65617D",
    },
  },
  imageContainer: {
    position: "absolute",
    right: 0,
    top: 100,
    margin: theme.spacing(0),
    transition: theme.transitions.create(["width", "height"], {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.short,
    }),
  },
}))

export default useKnowledgeStyles
