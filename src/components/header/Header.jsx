import { LOGO_URL, CART_URL } from "../utils/constants";
import "./Header.scss"
const Header =()=>{
    return(
        <div className="header_wrapper">
            <div className="logo">
                <img src={LOGO_URL}/>
            </div>
            <div className="nav_bar">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
                <div className="cart">
                    <img src={CART_URL}/>
                </div>
            </div>
        </div>
    )
}

export default Header;