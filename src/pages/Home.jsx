import { Link } from "react-router-dom";
import BannerImage from "../assets/banner.jpg";
function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Burger 21 </h1>
        <p>
          <span>Delicious Hambugers</span> <br /> with 40 Spicy Mixed
        </p>
        <Link to="/menu">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
}
export default Home;
