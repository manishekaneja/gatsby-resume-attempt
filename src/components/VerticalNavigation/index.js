import React from "react"
import { makeStyles } from "@material-ui/core"
import NavigationLink from "./NavigationLink"

const useTheme = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.light,
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
