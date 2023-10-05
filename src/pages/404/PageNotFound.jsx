import "./style.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <ContentWrapper>
        <span className="bigText">404</span>
        <span className="smallText">Page not found!</span>
        <Link to="/">
          <button type="button">Homepage</button>
        </Link>
      </ContentWrapper>
    </div>
  );
};

export default PageNotFound;
