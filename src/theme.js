// bg="#F7F3E7"
// savColor.5

import { theme } from "@chakra-ui/core";

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
    },
  },
};

export default customTheme;
