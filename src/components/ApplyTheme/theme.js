import { createMuiTheme } from "@material-ui/core"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#fdfdfd",
      main: "#bde390",
      dark: "#92bc83",
      contrastText: "#222222",
    },
    secondary: {
      light: "#edf4fc",
      main: "#b9c9eb",
      dark: "#969deb",
      contrastText: "#222222",
    },
  },
})

export default theme
