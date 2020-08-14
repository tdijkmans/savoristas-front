import { theme } from "@chakra-ui/core"

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,

    savColor: {
      1: "#f3e9d2",
      2: "#c6dabf",
      3: "#88d498",
      4: "#1a936f",
      5: "#114b5f",
      6: "#5C1D05",
      body: "#5C1D05",
      lining: "#CE6C2F",
      background: "#F3E9D2",
      cardMain: "#FFF9ED",
      cardFooter: "#FFFDF9"
    }
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace"
  }
}

export default customTheme
