import { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { Header, Footer } from "./components";
import { GlobalStyles } from "./components/global";
import { Home, PageNotFound } from "./pages";
import themeConfig from "./utils/theme.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          <BrowserRouter>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<PageNotFound />} />
              <Route path="/skills" element={<PageNotFound />} />
              <Route path="/work-space" element={<PageNotFound />} />
              <Route path="/contact" element={PageNotFound} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
