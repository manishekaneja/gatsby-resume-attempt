import { makeStyles } from "@material-ui/core"
const useProjectRowStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "flex-start",
    padding: 10,
    maxWidth: 1200,
    margin: "auto",
  },
  contentContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    marginTop: "0.5rem",
    "& p:first-child": {
      fontSize: "1.1rem",
      fontWeight: 500,
      textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    "& p:nth-child(2)": {
      fontSize: "0.85rem",
      textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      fontWeight: 400,
    },
    [theme.breakpoints.up("md")]: {
      "& p:first-child": {
        fontSize: "1.5rem",
      },
      "& p:nth-child(2)": {
        fontSize: "1rem",
      },  
    }
  },
  projectImageContainer: {
    maxWidth: "9rem",
    boxShadow: theme.shadows[5],
    height: "5rem",
    backgroundColor: "#333333aa",
    "& img": {
      width: "100%",
      height: "100%",
    },
    transition: "1s",
    [theme.breakpoints.up(361)]: {
      maxWidth: "10rem",
      height: "5.5rem",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "14rem",
      height: "8rem",
    },
  },
}))

export default useProjectRowStyles
