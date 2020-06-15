import { createMuiTheme } from "@material-ui/core"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#3A3A3A",
      main: "#2D2D2D",
      dark: "#1F1F1F",
      contrastText: "#F2F8F4",
    },
    
    secondary: {
      light: "#A3A7A5",
      main: "#7C7F7D",
      dark: "#545655",
      contrastText: "#222",
    },
  },
})

export default theme
