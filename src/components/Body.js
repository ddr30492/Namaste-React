import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
// import resList from "../utils/mockdata";
import Shimmer from "./Shimmer";

const btnWrapper = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: "20px",
    marginTop: "20px",
}

/** Body component */
const Body = () => {
  const [resJsonList, setResJsonList] = useState([]);
  // duplicate state variable to store filtered restaurant list
  const [filteredList, setFilteredList] = useState([]); 
  
  const [searchText, setSearchText] = useState("");

  // Whenever the state variable updates or changes, react triggers re-consilation cycle or the component re-renders
  console.log("Body rendered");
  // Function to filter restaurants with average rating greater than 4
  const ratingFilter = () => {
      const filterList = resJsonList.filter((resData) => {
          return resData?.info?.avgRating > 4
      });
      setResJsonList(filterList);
  }

  useEffect(() => {
    fetchRestaurantList()
  }, []);

  const fetchRestaurantList = async () => {
    const data01 = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data01.json();
    console.log(json);
    
    setResJsonList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  //conditional rendering
  // if (resJsonList.length === 0) {
  //   return <Shimmer />;
  // };

  return resJsonList.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="container">
        <div className="filters-wrapper">
            <div className="search-bar">
                <input type="text" placeholder="Search..." value={searchText} onChange={(e) => {
                  setSearchText(e.target.value);
                }}/>
                <button type="button" onClick={(e)=>{
                    e.preventDefault();
                    const filteredList = resJsonList.filter((resData) => {
                        return resData?.info?.name.toLowerCase().includes(searchText.toLowerCase());
                    });
                    setFilteredList(filteredList);
                }}>Search</button>
            </div>
            <div className="filter" style={btnWrapper}>
                <button type="button" className="btn btn-filter" onClick={ratingFilter}>Top Rated Restaurant</button>
            </div>
        </div>
        <div className="restaurant-list">
          {filteredList.map((resData) => {
            return <RestaurantCard key={resData?.info?.id} resData={resData} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
