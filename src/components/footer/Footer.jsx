import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          This React.js web app is a feature-rich platform resembling IMDb, focusing on movie and TV show ratings, overviews, genres, details, similarities, and personalized recommendations. Leveraging React.js, Redux Toolkit, TMDB API, and various React libraries, I provide an immersive user experience, allowing enthusiasts to explore, critique, and discover content easily. From detailed reviews to insightful genre categorization, my app caters to avid viewers, empowering them to make informed choices and discover new favorites. With a seamless interface and robust functionality, I strive to enhance the entertainment journey for every movie and TV show enthusiast.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
