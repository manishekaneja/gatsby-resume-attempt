import React from "react"
import { makeStyles } from "@material-ui/core"

const useNavTheme = makeStyles(theme => ({
  root: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    border: "none",
    outline: "none",
    padding: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    textTransform: "camelcase",
    zIndex: 0,
    minHeight: theme.spacing(9),
    transition: theme.transitions.create(
      ["background-color", "padding", "z-index", "box-shadow"],
      {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.short,
      }
    ),
    "&:hover": {
      boxShadow: theme.shadows[5],
      zIndex: 10,
    },
    [theme.breakpoints.down("sm")]: {
      "&>span": {
        display: "none",
      },
      "&:hover": {
        backgroundColor: theme.palette.secondary.dark + "aa",
        zIndex: 5,
        boxShadow: theme.shadows[1],
      },
      backgroundColor: theme.palette.secondary.main,
      padding: theme.spacing(0),
    },
  },
  active: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.light,
    boxShadow: theme.shadows[10],
    zIndex: theme.zIndex.drawer,
    [theme.breakpoints.down("sm")]: {
      "&>span": {
        display: "none",
      },
      padding: theme.spacing(1.5),
    },

    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
      boxShadow: theme.shadows[7],
    },
  },
}))

export default function NavigationLink({ label, active, onClick }) {
  const classes = useNavTheme()
  return (
    <button
      onClick={onClick}
      className={`${classes.root} ${active ? classes.active : ""}`}
    >
      <span>{label}</span>
    </button>
  )
}
