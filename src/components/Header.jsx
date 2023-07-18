import Menu from './Menu';



const Header = ({setRatings, loggedIn}) => {
    const handleClick = () => {
        setRatings([]);
    }
    return (
        <div className="header">
            <div className="home-icon" onClick={handleClick}>
                <img src="./public/images/home-btn2.png" alt="Image of chili peppers"></img>
                <h1>Home</h1>
            </div>
            <h1 id="title">Red or Green?</h1>
            <Menu loggedIn={loggedIn} />
            <img src="./public/images/new-mexico.gif" alt="Zia flag of New Mexico"></img> 
        </div>
    )
}

export default Header;