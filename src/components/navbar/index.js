import "./index.css"
import logo from "../../Assets/logo.png"
import elon from "../../Assets/elon.jpeg"
import { BiHome, BiHash, BiBell, BiMessageDetail, BiBookmark, BiListUl} from 'react-icons/bi';
import {CgProfile} from 'react-icons/cg';
import {CgMoreO, CgMoreAlt} from 'react-icons/cg';
import { useNavigate } from "react-router-dom";

import { NavLink } from "react-router-dom";
import Home from "../home/home";

const Navbar = ({children})=> {

    const navigator = useNavigate()
    return (
        <>
        <div className="homepage">
            <div className="navbar">
                <div className="navlist">
                <img className="navlogo" onClick={()=>{navigator("/home")}} src={logo}/>
                <NavLink to="/home" className="home"><BiHome/> Home</NavLink>
                <NavLink to="/explore" className="explore"><BiHash/> Explore</NavLink>
                <NavLink to="/notifications" className="note"><BiBell/> Notification</NavLink>
                <NavLink to="/messages" className="messages"><BiMessageDetail/> Messages</NavLink>
                <NavLink to="/bookmarks" className="bookmarks"><BiBookmark/> Bookmarks</NavLink>
                <NavLink to="/lists" className="lists"><BiListUl/> Lists</NavLink>
                <NavLink to="/profile" className="profile"><CgProfile/> Profile</NavLink>
                <div className="more"><CgMoreO/> More</div>
                </div>
                <div className="tweet">Tweet</div>
                <div className="profilewindow">
                    <img className="elon" src={elon}/>
                    <div className="rightside">
                    <div className="names">Elon Musk </div>
                    <div className="nick">@elonmusk</div>
                    </div>
                    <div className="threepoint"><CgMoreAlt/></div>
                </div>
            </div>

            <main>{children}</main>

        </div>
        </>
    )
}

export default Navbar;