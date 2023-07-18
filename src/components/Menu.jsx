const Menu = ({loggedIn}) => {
    if(loggedIn !== null) {
        return (
            <div className="menu-container">
                <h1>{"Logged in as: " + loggedIn.email}</h1>
            </div>    
        )
    } else {
    return (
        <div className="menu-container">
            <div className="signup">Sign Up</div>
            <div className="login">Login</div>
        </div>
        );
    }
}

export default Menu;