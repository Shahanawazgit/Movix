import { useSelector } from "react-redux";
import "./style.scss";
import PropTypes from "prop-types";

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);

  return (
    <div className="genres">
      {data?.map((genre) => {
        if (!genres[genre]?.name) return;
        return (
          <div key={genre} className="genre">
            {genres[genre]?.name}
          </div>
        );
      })}
    </div>
  );
};

Genres.propTypes = {
  data: PropTypes.any,
};

export default Genres;
