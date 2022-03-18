import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./tailwind.css"
import Nav from "./components/Nav.jsx";
import Checkout from "./components/Checkout.jsx";
import Products from "./components/Products.jsx";
import { CartProvider } from "./context/CartContext.js";

function App() {
  const item = 0;
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Nav item={item} />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
