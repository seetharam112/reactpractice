import "./restaurentcards.scss"
import {CDN_URL} from "../utils/constants"

const Card =(props)=>{
    const {resObj} = props;
    const {name, locality, areaName, costForTwo, cuisines, avgRating, cloudinaryImageId} = resObj?.info;
    return(
        <div className="restro_card">
            <img className="card_img" src={CDN_URL+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{locality}</h4>
            <p>{areaName}</p>
            <h4>{costForTwo}</h4>
            <p>{cuisines.join(",")}</p>
            <span>{avgRating}</span>
        </div>
    )
}

export default Card;