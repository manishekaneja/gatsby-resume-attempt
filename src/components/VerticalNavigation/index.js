import React from "react"
import { makeStyles } from "@material-ui/core"

const useTheme = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  navigationContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    flexDirection: "column",
  },
}))
function VerticalNavigation({ idx, updateIdx, sections }) {
  const classes = useTheme()
  if (!sections) {
    return null
  }
  return (
    <div className={classes.root}>
      <div className={classes.navigationContainer}>
        {sections.map((navItem, itemIdx) => (
          <NavigationLink
            label={navItem}
            key={navItem}
            active={itemIdx === idx}
            onClick={() => updateIdx(itemIdx)}
          />
        ))}
      </div>
    </div>
  )
}

export default VerticalNavigation

const useNavTheme = makeStyles(theme => ({
  root: {
    color: theme.palette.primary.contrastText,
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    padding: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    textTransform: "lowercase",
    minHeight: theme.spacing(9),
    transition: theme.transitions.create(["background-color", "padding"], {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.short,
    }),
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      boxShadow: theme.shadows[1],
    },
    [theme.breakpoints.down("sm")]: {
      "&>span": {
        display: "none",
      },
      "&:hover": {
        backgroundColor: theme.palette.secondary.main,
        boxShadow: theme.shadows[1],
      },
      backgroundColor: theme.palette.secondary.main,
      padding: theme.spacing(0),
    },
  },
  active: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.primary.dark,
    boxShadow: theme.shadows[20],
    [theme.breakpoints.down("sm")]: {
      "&>span": {
        display: "none",
      },
      padding: theme.spacing(2),
    },

    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}))

function NavigationLink({ label, active, onClick }) {
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
