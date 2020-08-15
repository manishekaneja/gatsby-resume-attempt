import React from "react"
import useTagBoxStyles from "./styleHook"

export default function TagBox({ children }) {
  const classes = useTagBoxStyles()
  return <div className={classes.root}>{children}</div>
}
