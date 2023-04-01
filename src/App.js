import React from "react";
import { CartProvider } from "react-use-cart";
import Header from "./components/Header/Header";
import Sections from "./components/Sections/Sections";

function App() {
  return (
    <CartProvider>
      <Header />
      <Sections />
    </CartProvider>
      
    
  );
}

export default App;