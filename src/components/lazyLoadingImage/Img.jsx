import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import PropTypes from "prop-types";

const Img = ({ src, className }) => {
  return <LazyLoadImage className={className || ""} alt="BackdropImage" effect="blur" src={src} />;
};

Img.propTypes = {
  src: PropTypes.any,
  className: PropTypes.string,
};

export default Img;
