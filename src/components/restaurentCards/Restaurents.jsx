import Card from "./Card"
import "./restaurentcards.scss"
import { useEffect, useState } from "react"
import resList from "../utils/mockData"
import Shimmer from "../Shimmer/shimmer"


const Restaurents =()=> {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.518468&lng=78.3038449&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        const cards = await json?.data?.cards
        cards.forEach((obj)=>{
           const newObj = obj
           if(newObj.card?.card?.gridElements){
            const restaurantsList = newObj.card?.card?.gridElements?.infoWithStyle.restaurants;
            setListOfRestaurants(restaurantsList);
           }
        })
        
        //console.log('json', json?.data?.cards?.card?.card?.gridElements?.infoWithStyle.restaurants);
    }

    useEffect(()=>{
        fetchData()
    },[])

    const topRatedRestaurants =()=> {
       const topRatedList = listOfRestaurants.filter((res) => res.info.avgRating > 4 );
       setListOfRestaurants(topRatedList);
    };

    return listOfRestaurants.length ===0 ? <Shimmer></Shimmer> : (
        <div className="restro_container_wrapper">
             <div className="filter">
                <button className="filter-btn" onClick={()=>{topRatedRestaurants()}}>Top Rated Restaurant</button>
            </div>
        
        <div className="restro_container">
            {listOfRestaurants?.map((restaurent) => (
                <Card key={restaurent.info.id} resObj={restaurent}></Card>
            ))} 
        </div>
        </div>
    )
}

export default Restaurents;