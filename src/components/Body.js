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
  // console.log("Body rendered");
  // Function to filter restaurants with average rating greater than 4
  const ratingFilter = () => {
      const filterList = resJsonList.filter((resData) => {
          return resData?.info?.avgRating > 4
      });
      setResJsonList(filterList);
  }

  useEffect(() => {
    console.log("useEffect called");
    fetchRestaurantList()
  }, []);

  const fetchRestaurantList = async () => {
    const data01 = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.147473547293863&lng=73.08054143461871&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data01.json();
    // console.log(json);
    
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
    <div className="body mb-6">
      <div className="container m-auto">
        <div className="filters-wrapper flex items-center justify-between mb-6">
            <div className="search-bar flex items-center gap-3">
                <input className="border p-3 w-96 max-w-full rounded-md" type="text" placeholder="Search..." value={searchText} onChange={(e) => {
                  setSearchText(e.target.value);
                }}/>
                <button className="bg-red-600 hover:bg-red-950 text-white p-3 px-6 rounded-md" type="button" onClick={(e)=>{
                    e.preventDefault();
                    const filteredList = resJsonList.filter((resData) => {
                        return resData?.info?.name.toLowerCase().includes(searchText.toLowerCase());
                    });
                    setFilteredList(filteredList);
                }}>Search</button>
            </div>
            <div className="filter">
                <button type="button" className="bg-purple-600 hover:bg-purple-950 text-white p-3 px-7 rounded-md" onClick={ratingFilter}>Top Rated Restaurant</button>
            </div>
        </div>
        <div className="restaurant-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4 py-4">
          {filteredList.map((resData) => {
            return <RestaurantCard key={resData?.info?.id} resData={resData} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
