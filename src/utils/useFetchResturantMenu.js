import { useEffect, useState } from "react";
import { MENU_URL } from "./const";

const useFetchResturantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchResturantMenu();
    }, []);
    
    const fetchResturantMenu = async () => {
        try {
            const response = await fetch(MENU_URL + resId);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setResInfo(data.data);
        } catch (error) {
            console.error("Failed to fetch restaurant menu:", error);
            setResInfo(null);
        }
    };

    return resInfo;
}

export default useFetchResturantMenu;