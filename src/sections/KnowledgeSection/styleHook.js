import { makeStyles } from "@material-ui/core"
const useKnowledgeStyles = makeStyles(theme => ({
  root: {
    gridTemplateRows: "40px 40px 1fr 1fr 1.2fr",
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
      transform: "translateX(5px) translateY(10px)",
    },
    "&>.tags>div:nth-child(2)": {
      transform: "translateX(5px) translateY(60px)",
    },
    "&>.tags>div:nth-child(3)": {
      transform: "translateX(85px) translateY(60px)",
    },
    "&>.tags>div:nth-child(4)": {
      transform: "translateX(5px) translateY(110px)",
    },
    "&>.tags>div:nth-child(5)": {
      transform: "translateX(60px) translateY(110px)",
    },
    "&>.tags>div:nth-child(6)": {
      transform: "translateX(135px) translateY(110px)",
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
      marginBottom: "1rem",
      letterSpacing: 0,
      fontWeight: 500,
    },
    "& p span": {
      fontWeight: 500,
      color: "#65617D",
    },
  },
  footer: {
    textAlign: "center",
    padding: 10,
    "& p": {
      fontSize: "0.98rem",
      margin: "auto",
      marginBottom: "1.2rem",
      letterSpacing: 0,
      fontWeight: 300,
    },
    "& p span": {
      fontWeight: 500,
      color: "#65617D",
    },
  },
  imageContainer: {
    position: "absolute",
    right: 0,
    top: "1%",
    margin: theme.spacing(0),
    transition: theme.transitions.create(["width", "height"], {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.short,
    }),
    "& img": {
      maxHeight: 350,
    },
  },
}))

export default useKnowledgeStyles
