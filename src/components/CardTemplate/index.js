import React from "react"
import { Typography } from "@material-ui/core"
import useTemplateStyles from "./styleHook"
import arrowImage from "./arrow.svg"

export default function CardTemplate({
  update,
  className = "",
  title = "Untitled",
  middle = null,
  lower = null,
  footer = null,
}) {
  const classes = useTemplateStyles()
  return (
    <div className={`${className} ${classes.root}`}>
      <div className={classes.header}>
        <button onClick={update}>
          <img src={arrowImage} alt="next" />
        </button>
      </div>
      <div className={`${classes.upperSection}`}>
        <Typography variant="h5">{title}</Typography>
      </div>
      {middle}
      {lower}
      {footer}
    </div>
  )
}
