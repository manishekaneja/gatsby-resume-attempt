import { makeStyles } from "@material-ui/core"
const useKnowledgeStyles = makeStyles(theme => ({
  root: {
    gridTemplateRows: "40px 40px 1fr 0.5fr 0.7fr",
    [theme.breakpoints.up(361)]: {
      gridTemplateRows: "40px 40px 1fr 0.7fr 1fr",
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
    "&>.tags.desktop": {
      display: "none",
    },
    "&>.tags>div": {
      minWidth: 150,
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
    [theme.breakpoints.up(361)]: {
      "&>.tags": {
        left: 25,
      },
    },
    [theme.breakpoints.up("sm")]: {
      "&>.tags": {
        position: "absolute",
        top: 25,
        left: "7%",
      },
      "&>.tags>div": {
        minWidth: 300,
      },
      "&>.tags.mobile": {
        display: "none",
      },
      "&>.tags.desktop": {
        display: "block",
      },
      "&>.tags>div:first-child": {
        transform: "translateX(0px) translateY(30px) scale(1.1)",
      },
      "&>.tags>div:nth-child(2)": {
        transform: "translateX(21px) translateY(90px) scale(1.1)",
      },
      "&>.tags>div:nth-child(3)": {
        transform: "translateX(42px) translateY(150px) scale(1.1)",
      },
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
    [theme.breakpoints.up(361)]: {
      "& p": {
        fontSize: "1.3rem",
      },
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
    [theme.breakpoints.up(361)]: {
      "& p": {
        fontSize: "1.1rem",
      },
    },
  },
  imageContainer: {
    position: "absolute",
    right: 0,
    top: 100,
    margin: theme.spacing(0),
    transition: theme.transitions.create(["width", "height", "transform"], {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.short,
    }),
    [theme.breakpoints.up(361)]: {
      "& img": {
        transform: " translateX(-20px) scale(1.2)",
      },
    },
    [theme.breakpoints.up("md")]: {
      "& img": {
        transform: " translateX(-50px) scale(1.6)",
      },
    },
  },
}))

export default useKnowledgeStyles
