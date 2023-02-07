import logo from "../images/logo-deliveroo.png";

const Header = ({ data }) => {
  return (
    <div>
      <header>
        <div className="logo">
          <img src={logo} alt="logo deliveroo" />
        </div>
      </header>
      <section className="restaurant">
        <div className="restaurant-description">
          <h1>{data.restaurant.name}</h1>
          <p>{data.restaurant.description}</p>
        </div>
        <div className="brunch-image">
          <img src={data.restaurant.picture} alt="imagemontorgueilrestaurant" />
        </div>
      </section>
    </div>
  );
};

export default Header;
