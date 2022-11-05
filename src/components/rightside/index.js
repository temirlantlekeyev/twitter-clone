import "./index.css"
import logo from "../../Assets/logo.png"
import elon from "../../Assets/elon.jpeg"
import { BiHome, BiHash, BiBell, BiMessageDetail, BiBookmark, BiListUl} from 'react-icons/bi';
import {CgProfile} from 'react-icons/cg';
import {CgMoreO, CgMoreAlt} from 'react-icons/cg';
import { useNavigate } from "react-router-dom";

const Rightside = () => {
    return (
        <>
        <div className="homepage">

<div className="navbar">
    <div className="navlist">
    <a href="/home" className="home"><BiHome/> Home</a>
    <a href="/explore" className="explore"><BiHash/> Explore</a>
    <a href="/notification" className="note"><BiBell/> Notification</a>
    <a href="/messages" className="messages"><BiMessageDetail/> Messages</a>
    <a href="/bookmarks" className="bookmarks"><BiBookmark/> Bookmarks</a>
    <a href="/lists" className="lists"><BiListUl/> Lists</a>
    <a href="/profile" className="profile"><CgProfile/> Profile</a>
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

<div className="mainpage">

</div>

</div>
        </>
    )
}

export default Rightside;