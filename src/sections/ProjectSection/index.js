import React from "react"
import { Typography } from "@material-ui/core"
import git from "./work.svg"
import useProjectStyles from "./styleHook"
import CardTemplate from "../../components/CardTemplate"
import ProjectRowBox from "../../components/ProjectRowBox"

export default function ProjectSection({ update }) {
  const classes = useProjectStyles()
  return (
    <CardTemplate
      update={update}
      title="Projects"
      className={classes.root}
      middle={
        <div className={classes.middleSection}>
          {["Javascript", "React", "Redux"].map((techName, idx) => (
            <ProjectRowBox key={techName} leftAliged={idx % 2 === 0} />
          ))}
        </div>
      }
      lower={
        <div className={classes.lowerSection}>
          <Typography variant="body1">More about my work</Typography>
          <Typography variant="body1">
            <span>@github/manishekaneja</span>
          </Typography>
        </div>
      }
      footer={
        <div className={classes.footer}>
          <div className={classes.imageContainer}>
            <img src={git} alt="git" />
          </div>
        </div>
      }
    />
  )
}
