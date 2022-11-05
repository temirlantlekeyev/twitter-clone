import Navbar from "../navbar";
import {BiSearch}  from 'react-icons/bi';
import elon from "../../Assets/elon.jpeg"

const Home = () => {
    return (
        <>
        <div className="homecontainer">
            <div className="main">
                    <div className="newtweetbox">
                        <div className="hometitle">Home</div>
                        
                        <div className="tweetpost">
                        <img src={elon} className="elon2"/>
                        <textarea placeholder="What's happening?" className="newtweet"></textarea>
                        <div className="down">
                        <input type="file" formMethod="get"/>
                        <button className="tweetbtn">Tweet</button>
                        </div>
                        </div>
                    </div>
                </div>

            <div className="rightside">
                <h2>Bar</h2>
                <input type="search" placeholder="Search Twitter"/>
            </div>
        </div>
        </>
    )
}

export default Home;