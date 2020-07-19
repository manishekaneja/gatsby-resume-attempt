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
    transition: "1s",
    height: "100vh",
    background: `linear-gradient(90deg,${theme.palette.primary.main},${theme.palette.primary.dark})`,
  },
}))

export default function BackgroundShape({ idx }) {
  const classes = useTheme()
  const { width, height } = useDimensions()
  const { corner } = useRandomCornerFinder(idx)
  //   updateCorner
  //   const [shape, updateShape] = React.useState({
  //     previousShape: `0,0 ${previousCorner.x},${previousCorner.y} ${width},${height} 0,${height}`,
  //     newShape: `0,0 ${corner.x},${corner.y} ${width},${height} 0,${height}`,
  //   })
  //   React.useEffect(() => {}, [corner])
  //   console.log({ corner, previousCorner })

  return (
    <>
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
      ></div>
      <div></div>
      {/* <svg
          width="100vw"
          height="100vh"
          style={{ position: "absolute", left: 0, top: 0 }}
        >
          <linearGradient id="gradient">
            <stop offset="0" stopColor="#bde390" />
            <stop offset="1" stopColor="#92bc83" />
          </linearGradient>
          <polygon style={{ fill: `url(#gradient)`, transition: 1000 }}>
            <animate
              attributeName="points"
              dur="1s"
              fill="freeze"
              from={shape.previousShape}
              to={shape.newShape}
            />
          </polygon>
          <line
            x1={width}
            y1={0}
            x2={corner.x}
            y2={corner.y}
            style={{ stroke: "#92bc83", strokeWidth: 2, transition: 1000 }}
          />
        </svg> */}
    </>
  )
}
