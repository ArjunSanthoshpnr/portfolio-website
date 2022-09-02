// import { useState, useContext } from "react";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { Header } from "./components";
import { GlobalStyles } from "./components/global";
import { Home } from "./pages";
import themeConfig from "./utils/theme.json";

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider
      theme={theme === "dark" ? themeConfig.dark : themeConfig.light}
    >
      <>
        <GlobalStyles />
        <div className="App">
          <Header theme={theme} toggleTheme={toggleTheme} />
          <Home />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
