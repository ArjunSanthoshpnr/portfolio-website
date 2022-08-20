import { useState } from "react";
import "./App.css";
import { Header } from "./components";
import { createGlobalStyle } from "styled-components";
import { toggleTheme } from "./utils/utils";
import { Home } from "./pages";
function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <>
      <GlobalStyle dark={darkTheme} />
      <div className="App">
        <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Home darkTheme={darkTheme} />
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
