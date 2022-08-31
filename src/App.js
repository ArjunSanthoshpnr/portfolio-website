// import { useState, useContext } from "react";
import "./App.css";
import { useContext, useState } from "react";
import { Button, Header } from "./components";
import { GlobalStyles } from "./components/global";
import { Home } from "./pages";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/theme";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  // const { theme } = useContext(ThemeContext);
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <div className="App">
          <Header toggleTheme={toggleTheme} />
          <DummyDiv>asdfsd</DummyDiv>
          {/* <Home /> */}
        </div>
      </>
    </ThemeProvider>
  );
}

const DummyDiv = styled.div`
  height: 3rem;
  width: 3rem;
  background-color: ${(props) => props.theme.text};
`;

export default App;
