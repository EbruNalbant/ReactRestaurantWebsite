import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <p>&copy; 2023, Burger21. All Rights Reserved. </p>
        <div className="socialMediaIcons">
          <AiFillInstagram />
          <AiFillTwitterCircle />
          <BiLogoFacebookCircle />
        </div>
      </div>
    </div>
  );
}
export default Footer;
