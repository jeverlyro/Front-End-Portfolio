// src/App.js
import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";

const App = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <Home />
    <About />
    <Works />
    <Contact />
  </>
);

export default App;
