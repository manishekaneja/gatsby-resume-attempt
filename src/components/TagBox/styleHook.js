import { makeStyles } from "@material-ui/core"
const useTagBoxStyles = makeStyles(theme => ({
  root: {
    position: "absolute",
    left: 0,
    height: 40,
    top: "10%",
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    minWidth: "fit-content",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: theme.shadows[2],
    transition: theme.transitions.create(["width", "height", "transform"], {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.short,
    }),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(2),
      fontSize: "1.2rem",
    },
  },
}))

export default useTagBoxStyles
