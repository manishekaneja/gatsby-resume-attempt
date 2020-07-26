import React from "react"
import useTagBoxStyles from "./styleHook"

export default function TagBox({ children, minWidth = "fit-content" }) {
  const classes = useTagBoxStyles()
  return (
    <div className={classes.root} style={{ minWidth }}>
      {children}
    </div>
  )
}
