/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.scss"
import { makeStyles } from "@material-ui/core"
import VerticalNavigation from "./VerticalNavigation"

const drawerWidthLarge = 500
const drawerWidthSmall = 300
const progressWidth = 10

const useTheme = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    transition: theme.transitions.create("height", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.standard,
    }),
    backgroundColor: theme.palette.secondary.light,
  },
  drawer: {
    boxShadow: theme.shadows[24],
    zIndex: theme.zIndex.drawer,
    width: drawerWidthLarge,
    height: "100vh",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.standard,
    }),
    [theme.breakpoints.between("md", "lg")]: {
      width: drawerWidthSmall,
    },
    [theme.breakpoints.down("sm")]: {
      width: progressWidth,
    },
  },
  contentWraper: {
    margin: "auto",
    height: "100vh",
    borderRadius: theme.shape.borderRadius,
    flex: 1,
    overflowY: "auto",
  },
}))

const Layout = ({ children, ...props }) => {
  const classes = useTheme()
  return (
    <div className={`${classes.root}`}>
      <div className={classes.drawer}>
        <VerticalNavigation {...props} />
      </div>
      <div className={classes.contentWraper}>
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
