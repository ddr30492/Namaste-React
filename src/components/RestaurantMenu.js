import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/const"; // Uncomment if you have a constant for the URL

const RestaurantMenu  = () => {

    const [resInfo, setresInfo] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
        // Simulate fetching restaurant menu data
        fetchRestaurantMenu();
    }, []);

    const fetchRestaurantMenu = async () => {
        // Simulated fetch function
        console.log("Fetching restaurant menu data...");

        const fetchData = await fetch(MENU_URL+resId);

        const json = await fetchData.json();
        setresInfo(json.data);
        console.log(json);
    }
    
    const {name, cuisines, costForTwo, avgRatingString, totalRatings} = resInfo?.cards[2]?.card?.card?.info || {};

    const itemsCard = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || {};
    console.log(itemsCard);
    return (resInfo === null) ? <Shimmer /> : (
        <div className="restaurant-menu container">
            <h1 className="restitle">{name}</h1>
            <div className="restaurant-details">
                <p>{cuisines.join(", ")}</p>
                <p>Cost for two: {costForTwo / 100} ₹</p>
                <p>⭐ Rating: {avgRatingString}</p>
                <p>Total Ratings: {totalRatings}</p>
            </div>
            <div className="menu-items">
                <h2>Menu Items</h2>
                <ul>
                    {itemsCard?.map((item) => (
                        <li key={item.card.info.id}>
                            <h3>{item.card.info.name}</h3>
                            <p>Price: {item.card.info.defaultPrice / 100 || item.card.info.price / 100} ₹</p>
                            <p>Description: {item.card.info.description}</p>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}
export default RestaurantMenu;