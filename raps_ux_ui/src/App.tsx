import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import ProductCard from './components/ProductCard';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
