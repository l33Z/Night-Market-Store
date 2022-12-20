import NewHeader from "./components/NewHeader";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Store from "./pages/Store";
import Item from "./components/Item";
import Cart from "./pages/Cart";
import { createContext, useState } from "react";

export const ProductContext = createContext();

function App() {
  const [CartData, setCartData] = useState([]);

  return (
    <>
      <ProductContext.Provider value={{ CartData, setCartData }}>
        <Router>
          <NewHeader />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:id" element={<Item />} />
          </Routes>
        </Router>
      </ProductContext.Provider>
    </>
  );
}

export default App;
