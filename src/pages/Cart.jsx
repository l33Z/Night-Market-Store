import "./cart.css";
import { ProductContext } from "../App.jsx";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { setCartData, CartData } = useContext(ProductContext);
  const [TotalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = CartData.reduce((a, b) => a + b.price, 0);
    setTotalPrice(total);
  }, [TotalPrice, CartData]);

  return (
    <div className="Cart__Main">
      <h1>Cart List</h1>
      <h2>Total : {TotalPrice} ₹</h2>
      <div className="product__List">
        {CartData.map((item) => {
          return (
            <div className="Product" key={item.id}>
              <Link to={`/item/${item.id}`}>
                <img src={item.thumbnail} alt="item" />
              </Link>
              <div className="product__Info">
                <p>{item.title}</p>
                <p>Price : {item.price} ₹ </p>
                <button
                  className="removeBtn"
                  onClick={() =>
                    setCartData(CartData.filter((i) => i.id !== item.id))
                  }
                >
                  <i className="fa-solid fa-trash"></i>Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
