import React from "react"
import { Typography } from "@material-ui/core"
import image from "./exper.svg"

import useExperencetStyles from "./styleHook"
import CardTemplate from "../../components/CardTemplate"
import TagBox from "../../components/TagBox"

export default function ExperienceSection({ update }) {
  const classes = useExperencetStyles()
  return (
    <CardTemplate
      update={update}
      title={"Experience"}
      className={classes.root}
      middle={
        <div className={classes.middleSection}>
          <div className={classes.imageContainer}>
            <img src={image} alt="git" />
          </div>
          <div className="tags mobile">
            {[`4yrs of B.Tech`, `4yrs of Dev.`, `1yr of IT Ind.`].map(
              expName => (
                <TagBox key={expName}>{expName}</TagBox>
              )
            )}
          </div>
          <div className="tags desktop">
            {[
              `4yrs of B.Tech`,
              `4yrs of Development`,
              `1yr of IT Industry`,
            ].map(expName => (
              <TagBox key={expName}>{expName}</TagBox>
            ))}
          </div>
        </div>
      }
      lower={
        <div className={classes.lowerSection}>
          <Typography variant="body1">
            Presently, working as <span>System&nbsp;engineer</span> at{" "}
            <span>Tata&nbsp;Consultancy&nbsp;Services</span>
          </Typography>
        </div>
      }
      footer={
        <div className={classes.footer}>
          <Typography variant="body1">Internships at:</Typography>
          <Typography variant="body1">
            <span>Enceladus Internet Pvt. Ltd.</span>
          </Typography>
          <Typography variant="body1">
            <span>VOZ Tech Pvt. Ltd. </span>
          </Typography>
        </div>
      }
    />
  )
}
