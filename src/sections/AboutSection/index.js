import React from "react"
import { Typography } from "@material-ui/core"
import useAboutStyles from "./styleHook"
import profileImage from "./profile.jpg"
import arrowImage from "../asset/arrow.svg"

export default function AboutSection({ className, update }) {
  const classes = useAboutStyles()
  return (
    <div className={`${className} ${classes.root}`}>
      <div className={classes.header} />
      <div className={classes.upperSection} />
      <div className={`${classes.middleSection} ${classes.textContainer}`}>
        <div className={classes.imageContainer}>
          <img
            src={profileImage}
            style={{ width: "100%", height: "100%" }}
            alt="profile"
          />
        </div>
        <Typography variant="h5">Manish Aneja</Typography>
      </div>
      <div className={`${classes.lowerSection} ${classes.textContainer}`}>
        <Typography variant="h5">web_developer</Typography>
        <Typography variant="h5">&amp;</Typography>
        <Typography variant="h5">javascript_enthusiast</Typography>
      </div>
      <div className={classes.footer}>
        <button onClick={update}>
          <img src={arrowImage} alt="next" />
        </button>
      </div>
    </div>
  )
}
