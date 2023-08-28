// App.tsx
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import ProductCard from "./components/ProductCard";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [cartCount, setCartCount] = useState<number>(0); // Estado para el contador del carrito

  return (
    <BrowserRouter>
      <Header cartCount={cartCount} /> {/* Pasa el contador al Header */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/products"
          element={<ProductCard setCartCount={setCartCount} />} // Pasa la función para actualizar el contador
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
