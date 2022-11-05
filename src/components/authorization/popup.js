
const Popup = ()  => {
    return (
        <>
        <div className="popup">

            <div className="register">Register via email</div>
            <div className="email">
                Email:
                <input className="eml" type="email" placeholder="Email"/>
            </div>

            <div className="password">
                Password:
                <input className="psw" type="password" placeholder="Password"/>
            </div>

            <div className="button">
                <button className="btn">Send</button>
            </div>

        </div>
        </>
    )
}

export default Popup;