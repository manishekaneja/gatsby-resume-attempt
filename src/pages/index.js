import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundShape from "../components/BackgroundShape/index"
import ApplyTheme from "../components/ApplyTheme"
import SwipeableViews from "react-swipeable-views"
import AboutSection from "../sections/AboutSection/index"
import KnowledgeSection from "../sections/KnowledgeSection"
import ExperienceSection from "../sections/ExperienceSection"
import ProjectSection from "../sections/ProjectSection"
import ContactSection from "../sections/ContactSection"

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
          axis="y"
          index={idx}
          onChangeIndex={updateIdx}
        >
          {[
            AboutSection,
            KnowledgeSection,
            ExperienceSection,
            ProjectSection,
            ContactSection,
          ].map((Component, idx) => (
            <Component key={idx} update={() => updateIdx(idx <= 0 ? 1 : 0)} />
          ))}
        </SwipeableViews>
      </Layout>
    </ApplyTheme>
  )
}

export default IndexPage