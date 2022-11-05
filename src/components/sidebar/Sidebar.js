import "./index.css"
import { BiHome, BiHash, BiBell, BiMessageDetail, BiBookmark, BiListUl} from 'react-icons/bi';
import {CgProfile} from 'react-icons/cg';
import {CgMoreO, CgMoreAlt} from 'react-icons/cg';
import { NavLink } from 'react-router-dom';
import logo from "../../Assets/logo.png"
import elon from "../../Assets/elon.jpeg"

import Home from "../home/home";

const Sidebar = ({children, secondchildren}) => {

    const sidebarItems = [
        {
            path: "/",
            name: "Home",
            icon: <BiHome/>
        },
        {
            path: "/explore",
            name: "Explore",
            icon: <BiHash/>
        },
        {
            path: "/notifications",
            name: "Notifications",
            icon: <BiBell/>
        },
        {
            path: "/messages",
            name: "Messages",
            icon: <BiMessageDetail/>
        },
        {
            path: "/bookmarks",
            name: "Bookmarks",
            icon: <BiBookmark/>
        },
        {
            path: "/lists",
            name: "Lists",
            icon: <BiListUl/>
        },
        {
            path: "/profile",
            name: "Profile",
            icon: <CgProfile/>
        },
    ]

    return (
        <div className='container'>
            <div className='sidebar'>
                <div className='section'>
                <img className="navlogo" onClick={()=>{navigator("/home")}} src={logo}/>
                    {sidebarItems.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className='icon'>{item.icon}</div>
                            <div className='linktext'>{item.name}</div>
                        </NavLink>
                    ))}
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
            <main>
                {children}
            </main>
            <div>
                {secondchildren}
            </div>
        </div>
    )
}

export default Sidebar;