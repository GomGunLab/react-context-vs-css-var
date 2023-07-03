import * as React from "react";
import styled from "@emotion/styled";

import { vars } from "./theme.css";

const PrimaryText = styled.div({
  padding: 20,
  color: vars.colors.primary,
  backgroundColor: vars.colors.background,
});

function ThemeToggler() {
  const [theme, setTheme] = React.useState("light");
  const nextTheme = theme === "light" ? "dark" : "light";

  React.useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <button onClick={() => setTheme(nextTheme)}>
      Change to {nextTheme} mode
    </button>
  );
}

export default function Vanilla() {
  return (
    <div>
      <PrimaryText>This text is the primary color</PrimaryText>
      <ThemeToggler />
    </div>
  );
}
