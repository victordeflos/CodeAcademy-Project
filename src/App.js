import React from "react";
// GLOBAL STYLE
import GlobalStyle from "./components/GlobalStyle";
// IMPORT PAGES
import AboutUs from "./pages/AboutUs";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <AboutUs />
    </div>
  );
}

export default App;
