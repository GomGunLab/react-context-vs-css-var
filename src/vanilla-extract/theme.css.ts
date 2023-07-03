import { createThemeContract, createGlobalTheme } from "@vanilla-extract/css";

export const vars = createThemeContract({
  colors: {
    primary: null,
    background: null,
  },
});

createGlobalTheme("body[data-theme2='light']", vars, {
  colors: {
    primary: "deeppink",
    background: "white",
  },
});

createGlobalTheme("body[data-theme2='dark']", vars, {
  colors: {
    primary: "lightpink",
    background: "black",
  },
});
