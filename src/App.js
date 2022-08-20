import { useState } from "react";
import "./App.css";
import { Header } from "./components";
import { createGlobalStyle } from "styled-components";
import { toggleTheme } from "./utils/utils";
function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <>
      <GlobalStyle dark={darkTheme} />
      <div className="App">
        <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      </div>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: var(--background-primary-${(props) =>
      toggleTheme(props)});
    transition: background 500ms;

  }
`;

export default App;
