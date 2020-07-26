import React from "react"
import { Typography } from "@material-ui/core"
import git from "./git.svg"
import useKnowledgeStyles from "./styleHook"
import CardTemplate from "../../components/CardTemplate"
import TagBox from "../../components/TagBox"

export default function KnowledgeSection({ update }) {
  const classes = useKnowledgeStyles()
  return (
    <CardTemplate
      update={update}
      className={classes.root}
      title={"Knowledge"}
      middle={
        <div className={classes.middleSection}>
          <div className={classes.imageContainer}>
            <img src={git} alt="git" />
          </div>
          <div class="tags">
            {["Javascript", "React", "Redux", "Git", "Node", "Mongo"].map(
              techName => (
                <TagBox key={techName}>{techName} </TagBox>
              )
            )}
          </div>
        </div>
      }
      lower={
        <div className={classes.lowerSection}>
          <Typography variant="body1">
            Inshort, a full-stack developer who works majorly on{" "}
            <span>MERN</span> stack.
          </Typography>
        </div>
      }
      footer={
        <div className={classes.footer}>
          <Typography variant="body1">
            But definitely don’t limit myself to web development.
            <span>Open to many other things.</span>
          </Typography>
          <Typography variant="body1">
            Other than ‘dev’ got some hobbies too, which revolve more around{" "}
            <span>sleep </span>
            and <span>chill</span>
          </Typography>
        </div>
      }
    />
  )
}
