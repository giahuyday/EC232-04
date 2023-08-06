import { Link } from "react-router-dom";
import "./SearchCard.scss";

const SearchCard = ({ result }) => {
    const [Name, ItemID] = result
    return (
        <Link className="search-result" to={`/detail/${ItemID}`}>
            <h1>{Name}</h1>
        </Link>
      );
};

export default SearchCard