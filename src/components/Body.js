import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockdata";

const btnWrapper = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: "20px",
    marginTop: "20px",
}

/** Body component */
const Body = () => {

    const [resJsonList, setResJsonList] = useState(resList);

  const ratingFilter = () => {
      const filterList = resJsonList.filter((resData) => {
          return resData?.info?.avgRating > 4
      });
      setResJsonList(filterList);
  }
  return (
    <div className="body">
      <div className="container">
        <div className="filters-wrapper">
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button type="button">Search</button>
            </div>
            <div className="filter" style={btnWrapper}>
                <button type="button" className="btn btn-filter" onClick={ratingFilter}>Top Rated Restaurant</button>
            </div>
        </div>
        <div className="restaurant-list">
          {resJsonList.map((resData) => {
            return <RestaurantCard key={resData?.info?.id} resData={resData} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
