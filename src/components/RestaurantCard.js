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
    <div className="restaurant-item p-4 shadow-lg bg-slate-100 rounded-md hover:bg-slate-300 transition-all">
      <Link to={`/restaurant/${resData?.info?.id}`}>
        <div className="restaurant-image h-52 overflow-hidden rounded-md mb-4">
          <img
            src={CDN_URL+cloudinaryImageId}
            alt={name}
            className="max-h-96"
          />
        </div>
        <h3 className="text-3xl font-bold underline">{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRating} ⭐</p>
        <p>{costForTwo}</p>
        <p>Delivery Time: {sla?.deliveryTime} mins</p>
      </Link>
    </div>
  );
};

export default RestaurantCard;
