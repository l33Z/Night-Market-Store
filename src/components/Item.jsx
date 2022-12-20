import { ProductContext } from "../App.jsx";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import "./item.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import ItemDatas from "../Data.json";

const Item = () => {
  const { setCartData, CartData } = useContext(ProductContext);

  const { id: ItemId } = useParams();
  const [ItemData, setItemData] = useState([]);

  useEffect(() => {
    const Data = ItemDatas.filter((item) => item.id == ItemId);
    setItemData(...Data);
  }, []);

  return (
    <div className="item__Main">
      <div className="item__Container">
        <div className="item__leftSide">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={ItemData.thumbnail} alt="ac" />
            </SwiperSlide>
            {ItemData.images &&
              ItemData.images.map((item) => {
                return (
                  <SwiperSlide key={item}>
                    <img src={item} alt="ac" />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
        <div className="item__rightSide">
          <h2>{ItemData.title}</h2>
          <p className="item_desc">{ItemData.description}</p>
          <p className="item_price">Price : {ItemData.price} ₹</p>
          <p className="item_catg">Category : {ItemData.category}</p>
          <p className="item_disc">
            Discount : {ItemData.discountPercentage} % off
          </p>
          <p className="item_brand">Brand : {ItemData.brand} </p>
          <p className="item_stock">Stock : {ItemData.stock}</p>
          <p className="item_rating">
            Rating : {ItemData.rating} <i className="fa-solid fa-star"></i>
          </p>
          <div className="item_btns">
            <button
              className={
                !CartData.includes(ItemData) ? "btns" : "btns disabled"
              }
              onClick={() => setCartData([...CartData, ItemData])}
            >
              <i className="fa-solid fa-cart-plus"></i>Add to cart
            </button>
            <button
              className={
                CartData.includes(ItemData) ? "btns delBtn" : "btns disabled"
              }
              onClick={() =>
                setCartData(CartData.filter((i) => i.id != ItemData.id))
              }
            >
              <i className="fa-solid fa-trash"></i>Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
