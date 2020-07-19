import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundShape from "../components/BackgroundShape/index"
import ApplyTheme from "../components/ApplyTheme"
import SwipeableViews from "react-swipeable-views"
import Image from "../components/image"
import { makeStyles, Typography } from "@material-ui/core"
import Typed from "react-typed"

const useTheme = makeStyles(theme => ({
  slide: {
    padding: 15,
    minHeight: "100vh",
    maxHeight: "100vh",
  },
}))

const sections = [
  "About Me",
  "Knowledge",
  "Experiences",
  "Projects",
  "Contact Me",
]

function useScreenTracker() {
  const [idx, updateIdx] = React.useState(0)
  React.useEffect(() => {
    const action = event => {
      if (event.key === "ArrowDown") {
        updateIdx(ps =>
          ps < sections.length - 1 ? ps + 1 : sections.length - 1
        )
      } else if (event.key === "ArrowUp") {
        updateIdx(ps => (ps > 0 ? ps - 1 : 0))
      }
    }
    window.addEventListener("keydown", action)
    return () => {
      window.removeEventListener("keydown", action)
    }
  })
  return { idx, updateIdx }
}

const IndexPage = () => {
  const { idx, updateIdx } = useScreenTracker()
  const classes = useTheme()
  return (
    <ApplyTheme>
      <Layout idx={idx} updateIdx={updateIdx} sections={sections}>
        <SEO title={sections[idx]} />
        <BackgroundShape idx={idx} />
        <SwipeableViews
          containerStyle={{
            height: "100vh",
          }}
          enableMouseEvents
          resistance
          axis="y"
          index={idx}
          onChangeIndex={updateIdx}
        >
          <AboutSection className={`${classes.slide}`} />
        </SwipeableViews>
      </Layout>
    </ApplyTheme>
  )
}

export default IndexPage

const useAboutTheme = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  textContainer: {
    maxWidth: 600,
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      margin: `${theme.spacing(5)}px auto`,
    },
  },
  imageContainer: {
    width: 250,
    height: 250,
    borderRadius: "50%",
    overflow: "hidden",
    boxShadow: theme.shadows[5],
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      margin: `${theme.spacing(5)}px auto`,
    },
  },
}))

const AboutSection = ({ className, style }) => {
  const classes = useAboutTheme()
  return (
    <div className={`${className} ${classes.root}`}>
      <div className={classes.imageContainer}>
        <Image />
      </div>
      <div className={classes.textContainer}>
        <Typography variant="h5">
          <Typed
            strings={[
              "Hi, made by manish aneja, (i.e me) and here you will get to know about me only",
            ]}
            showCursor={false}
            typeSpeed={40}
          />
        </Typography>
        <Typography variant="h3">Loream Ipsum </Typography>
      </div>
    </div>
  )
}
