import React from "react"
import theme from "./theme"
import { MuiThemeProvider } from "@material-ui/core"

export default function ApplyTheme({ children }) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}
