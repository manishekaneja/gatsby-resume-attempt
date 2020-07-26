import React from "react"
import useProjectRowStyles from "./styleHook.js"
import { Typography } from "@material-ui/core"
import git from "./work.svg"

export default function ProjectRowBox({
  name = "Untitled",
  details = "Can't Find Details",
  leftAliged,
}) {
  const classes = useProjectRowStyles()
  return (
    <div
      className={classes.root}
      style={{ flexDirection: leftAliged ? "row" : "row-reverse" }}
    >
      <div
        className={classes.contentContainer}
        style={{ alignItems: leftAliged ? "flex-start" : "flex-end" }}
      >
        <Typography variant="body1">{name}</Typography>
        <Typography variant="body1">{details}</Typography>
      </div>
      <div className={classes.projectImageContainer}>
        <img src={git} alt="asd" />
      </div>
    </div>
  )
}
