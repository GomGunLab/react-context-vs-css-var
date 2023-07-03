import * as React from "react";
import styled from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";

const themes = {
  light: {
    colors: {
      primary: "deeppink",
      background: "white",
    },
  },
  dark: {
    colors: {
      primary: "lightpink",
      background: "black",
    },
  },
};

const PrimaryText = styled.div(({ theme }) => ({
  padding: 20,
  //@ts-ignore
  color: theme.colors.primary,
  //@ts-ignore
  backgroundColor: theme.colors.background,
}));

//@ts-ignore
function ThemeToggler({ theme, onClick }) {
  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <button onClick={() => onClick(nextTheme)}>
      Change to {nextTheme} mode
    </button>
  );
}

export default function Context() {
  const [theme, setTheme] = React.useState("light");

  return (
    //@ts-ignore
    <ThemeProvider theme={themes[theme]}>
      <PrimaryText>This text is the primary color</PrimaryText>
      <ThemeToggler
        theme={theme}
        //@ts-ignore
        onClick={(nextTheme) => setTheme(nextTheme)}
      />
    </ThemeProvider>
  );
}
