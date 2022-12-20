import "./newHeader.css";

const NewHeader = () => {
  return (
    <div className="header__Main">
      <div className="headerLogo">
        <p>🏪 Nightmarket Store</p>
      </div>
      <div className="header__search">
        <input
          className="header__search__input"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="account__Details">
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
  );
};

export default NewHeader;
