import twitter2 from "../../Assets/twitter2.png";
import logo from "../../Assets/logo.png"
import "./index.css";
import Popup from "./popup";
import { useState } from "react";

const Authorization = (Popup) => {

    const [popup, setPopup] = useState(false)

    const handlePopup = () => {
       setPopup(true)
        
    }

    return (
        <>
        <div className="auth">
            
                 <div className="mob">
                    <img className="mob2" src={twitter2}/>
                </div>

                <div className="frame">
                    <img className="logo" src={logo} />
                    <div onClick={handlePopup} className="log">Log in</div>
                    <div onClick={handlePopup} className="sign">Sign up</div>
                    {popup && <Popup/>}
                </div>
               
               {/* <Popup/> */}
        </div>
        </>
    )
}

export default Authorization;