import React from "react"
import { Typography } from "@material-ui/core"
import git from "./mail-box.svg"
import useContactStyles from "./styleHook"
import github from "./github.svg"
import linkedIn from "./linkedin.svg"
import CardTemplate from "../../components/CardTemplate"

export default function ContactSection({ update }) {
  const classes = useContactStyles()
  return (
    <CardTemplate
      update={update}
      title="Contact"
      className={classes.root}
      middle={
        <div className={classes.middleSection}>
          <div className={classes.imageContainer}>
            <img src={git} alt="git" />
          </div>
        </div>
      }
      lower={
        <div className={classes.lowerSection}>
          <Typography variant="body1">
            If you wish to contact me, or willing to discuss an idea.{" "}
          </Typography>
          <Typography variant="body1">
            Just write a mail at <span>manishekaneja@gmail.com</span>{" "}
          </Typography>
          <Typography variant="body1">or</Typography>
        </div>
      }
      footer={
        <div className={classes.footer}>
          <Typography variant="body1">Connect With Me At</Typography>
          <div>
            <img src={linkedIn} alt={"linkedin"} />
            <img src={github} alt={"github"} />
          </div>
        </div>
      }
    />
  )
}
