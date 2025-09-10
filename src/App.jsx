import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Support from "./components/Support";
import About from './components/About';
import Clients from './components/Clients';
import Form from "./components/Form";
import Creators from './components/Creators';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Creators />
      <Support />
      <About />
      <Clients />
      <Form />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
