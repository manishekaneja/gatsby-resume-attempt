import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ApplyTheme from "../components/ApplyTheme"
import SwipeableViews from "react-swipeable-views"
import Image from "../components/image"
import { makeStyles, Typography } from "@material-ui/core"
import Typed from "react-typed"

const styles = {
  containerStyle: {
    height: "100vh",
  },
  slide: {
    padding: 15,
    minHeight: "100vh",
    color: "#fff",
  },
  slide1: {
    backgroundColor: "#FEA900",
  },
  slide2: {
    backgroundColor: "#B3DC4A",
  },
  slide3: {
    backgroundColor: "#6AC0FF",
  },
}

const sections = ["About Me", "Knowledge_set", "Experience", "conatct me"]
const IndexPage = () => {
  const [idx, updateIdx] = React.useState(0)
  React.useEffect(() => {
    const action = event => {
      if (event.key === "ArrowDown") {
        updateIdx(ps => (ps < 3 ? ps + 1 : 3))
      } else if (event.key === "ArrowUp") {
        updateIdx(ps => (ps > 0 ? ps - 1 : 0))
      }
    }
    window.addEventListener("keydown", action)
    return () => {
      window.removeEventListener("keydown", action)
    }
  })
  return (
    <ApplyTheme>
      <Layout idx={idx} updateIdx={updateIdx} sections={sections}>
        <SEO title={sections[idx]} />
        <SwipeableViews
          containerStyle={styles.containerStyle}
          enableMouseEvents
          resistance
          axis="y"
          index={idx}
          onChangeIndex={updateIdx}
        >
          <AboutSection />
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
            slide n°2
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}>
            slide n°3
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
            slide n°4
          </div>
        </SwipeableViews>
      </Layout>
    </ApplyTheme>
  )
}

export default IndexPage

const useAboutTheme = makeStyles(theme => ({
  root: {
    padding: 15,
    minHeight: "100vh",
    maxHeight: "100vh",
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

const AboutSection = () => {
  const classes = useAboutTheme()
  return (
    <div className={classes.root}>
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
