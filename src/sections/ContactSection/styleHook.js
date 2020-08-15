import { makeStyles } from "@material-ui/core"
const useContactStyles = makeStyles(theme => ({
  root: {
    gridTemplateRows: "40px 40px 80px 1fr 140px",
  },
  middleSection: {
    position: "relative",
    zIndex: 0,
    height: "100%",
  },
  lowerSection: {
    textAlign: "center",
    margin: "auto 10%",
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
    [theme.breakpoints.up(361)]: {
      "& p": {
        fontSize: "1.3rem",
      },
    },
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    textAlign: "center",
    zIndex: 1,
    boxShadow: theme.shadows[5],
    "& img": {
      margin: "10px 20px",
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

    "& img": {
      maxHeight: 350,
    },
  },
}))

export default useContactStyles
