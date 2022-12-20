import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="Home__Main">
        <div className="Home__left">
          <h1>"Shop smart, shop with us!"</h1>
          <h2>
            Welcome to our online store! We are excited to offer a wide
            selection of products for all of your needs. Whether you are
            shopping for yourself or for a gift, we have something for everyone.
          </h2>
          <Link to="/store" className="startBtn">Start Shopping</Link>
        </div>

        <div className="Home__right">
          <img src="./bg3.png" alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Home;
