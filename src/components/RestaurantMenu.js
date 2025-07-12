import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useFetchResturantMenu from "../utils/useFetchResturantMenu";
import useCheckOnlineStatus from "../utils/useCheckOnlineStatus";
import RestaurantMenuItem from "./ResturantMenuItem";

const RestaurantMenu  = () => {
    const { resId } = useParams();
    const resInfo = useFetchResturantMenu(resId);

    const [openIndex, setOpenIndex] = useState(null);

    const handleAccordionClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    
    const {name, category, cuisines, costForTwo, avgRatingString, totalRatingsString} = resInfo?.cards[2]?.card?.card?.info || {};

    const itemsCard = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    
    const filteredItems = itemsCard?.filter((item) => {
        return item.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    });
    const onlineStatus = useCheckOnlineStatus();
    
    if(onlineStatus === false){
        return <h1>You looklike offline.Please check your internet connection!</h1>
    }

    return (resInfo === null) ? <Shimmer /> : (
        <div className="restaurant-menu container m-auto">
            <h1 className="restitle text-center font-bold text-2xl mb-3 mt-5">{name}</h1>
            <div className="restaurant-details text-center mb-5">
                <p><strong>Cuisines: </strong> {cuisines.join(', ')}</p>
                <p><strong>Cost for two: </strong>{costForTwo / 100} ₹</p>
                <p><strong>⭐ Rating:</strong> {avgRatingString}</p>
                <p><strong>Total Ratings:</strong> {totalRatingsString}</p>
            </div>
            <div className="menu-items">
                <ul>
                    {filteredItems.map((item, index) => (
                        <li key={index} className="menu-item mb-4">
                            <RestaurantMenuItem 
                                innerItem={item?.card?.card?.itemCards} 
                                title={item?.card?.card?.title} 
                                isOpen={openIndex === index}
                                onToggle={() => handleAccordionClick(index)}
                            />
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}
export default RestaurantMenu;