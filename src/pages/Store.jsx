import "./store.css";
import { Link } from "react-router-dom";
import StoreData from "../Data.json";
import { ProductContext } from "../App.jsx";
import { useContext } from "react";

const Store = () => {
  const { setCartData, CartData } = useContext(ProductContext);

  return (
    <div className="Store__Main">
      <div className="Store__Items">
        {StoreData.map((item) => {
          return (
            <div className="Store__Item" key={item.id}>
              <Link to={`/item/${item.id}`}>
                <img src={item.thumbnail} alt="xd" />
              </Link>
              <div className="item__info">
                <h2 className="Item__Title">{item.title}</h2>
                {/* <p className="Item__Desc">{item.description}</p> */}

                <div className="item__Flex">
                  <p className="Item__Price"> ₨ {item.price}</p>
                  <p className="Item__Rating">
                    <i className="fa-solid fa-star"></i> {item.rating}
                  </p>
                  <p className="Item__Discount">
                    {item.discountPercentage} % off
                  </p>
                </div>
                <div className="item__Btns">
                  <button
                    className={
                      !CartData.includes(item) ? "btns" : "btns disabled"
                    }
                    onClick={() => setCartData([...CartData, item])}
                  >
                    <i className="fa-solid fa-cart-plus"></i>Add to cart
                  </button>
                  <button
                    className={
                      CartData.includes(item) ? "btns delBtn" : "btns disabled"
                    }
                    onClick={() =>
                      setCartData(CartData.filter((i) => i.id != item.id))
                    }
                  >
                    <i className="fa-solid fa-trash"></i>Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Store;
