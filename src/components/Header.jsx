import Menu from './Menu';



const Header = ({setRatings}) => {
    const handleClick = () => {
        setRatings([]);
    }
    return (
        <div className="header">
            <div className="home-icon" onClick={handleClick}>
                <img src="./public/images/home-btn.png" alt="Image of chili peppers"></img>
                <h1>Home</h1>
            </div>
            <h1 id="title">Red or Green?</h1>
            <Menu />
        </div>
    )
}

export default Header;