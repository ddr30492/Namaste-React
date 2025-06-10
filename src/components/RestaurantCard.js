import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/const";

/** Restruant card component */
/** write inline css using object */
const styles = {
    backgroundColor: "#f9f9f9",
};

const RestaurantCard = (props) => {
  // console.log(props)
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className="restaurant-item" style={styles}>
      <Link to={`/restaurant/${resData?.info?.id}`}>
        <div className="restaurant-image">
          <img
            src={CDN_URL+cloudinaryImageId}
            alt={name}
          />
        </div>
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRating} ⭐</p>
        <p>{costForTwo}</p>
        <p>Delivery Time: {sla?.deliveryTime} mins</p>
      </Link>
    </div>
  );
};

export default RestaurantCard;
