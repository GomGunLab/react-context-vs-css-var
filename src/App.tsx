import CssVars from "./css-vars";
import Context from "./context";
import Vanilla from "./vanilla-extract";

import "./vanilla-extract/theme.css";

function App() {
  return (
    <>
      <Context />
      <hr />
      <CssVars />
      <hr />
      <Vanilla />
    </>
  );
}

export default App;
