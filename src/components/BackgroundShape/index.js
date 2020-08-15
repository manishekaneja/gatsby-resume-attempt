import React from "react"
import { makeStyles } from "@material-ui/core"

function useDimensions() {
  const [dimensions, setDimensions] = React.useState(getDimensions())
  function getDimensions() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }
  function updateDimensions() {
    setDimensions(getDimensions)
  }
  React.useEffect(() => {
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  })
  return dimensions
}
function useRandomCornerFinder(idx) {
  const [corner, setCorner] = React.useState({ x: 0, y: 0 })
  function getCornerValues() {
    return {
      x: 150 + Math.random() * 50,
      y: 150 + Math.random() * 50,
    }
  }
  React.useEffect(updateCorner, [idx])
  function updateCorner() {
    setCorner(getCornerValues())
  }
  return {
    corner,
    updateCorner,
  }
}

const useTheme = makeStyles(theme => ({
  backgroundShape: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100vw",
    transition: theme.transitions.create(["clip-path"], {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.short,
    }),
    height: "100vh",
    background: `linear-gradient(90deg,${theme.palette.primary.main},${theme.palette.primary.dark})`,
  },
}))

export default function BackgroundShape({ idx }) {
  const classes = useTheme()
  const { width, height } = useDimensions()
  const { corner } = useRandomCornerFinder(idx)
  return (
      <div
        className={classes.backgroundShape}
        style={{
          clipPath: `polygon(0px 0px,
            ${
              width > 500
                ? `
            ${width - corner.x - 1}px ${corner.y}px, 
             ${width - 1}px 0px ,
             ${width}px 1px ,
             ${width - corner.x}px ${corner.y + 1}px,`
                : `
             ${width - corner.x}px 0px,
             `
            }
             ${width}px ${height}px,
             0px ${height}px )`,
        }}
      />
  )
}
