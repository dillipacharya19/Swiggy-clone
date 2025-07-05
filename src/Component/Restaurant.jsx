import { useEffect, useState } from "react";
import RestCardOption from "./RestCardOption";
import RestFoodOption from "./RestFoodOption";
import Shimmer from "./Shimmer";

export default function Restaurant() {
    const [RestData, setRestData] = useState([]);
    const [foodData, setFoodData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const proxyServer = "https://thingproxy.freeboard.io/fetch/";


            const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
            const response = await fetch(proxyServer + swiggyAPI);

            const data = await response.json();

            setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
            setFoodData(data?.data?.cards[0]?.card?.card?.imageGridCards?.info || []);
        }

        fetchData();
    }, []);

    if (RestData.length === 0) return <Shimmer />;

    return (
        <div className="bg-gray-50">
            <RestFoodOption foodData={foodData} />
            <RestCardOption restData={RestData} />
        </div>
    );
}
