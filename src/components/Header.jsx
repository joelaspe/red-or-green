import Menu from './Menu';

import homeBtn from '/public/images/home-btn2.png';
import ziaImage from '/public/images/new-mexico.gif';

const Header = ({setRatings, loggedIn}) => {
    const handleClick = () => {
        setRatings([]);
    }
    return (
        <div className="header">
            <div className="home-icon" onClick={handleClick}>
                <img src={homeBtn} alt="Image of chili peppers"></img>
                <h1>Home</h1>
            </div>
            <h1 id="title">Red or Green?</h1>
            <Menu loggedIn={loggedIn} />
            <img src={ziaImage} alt="Zia flag of New Mexico"></img> 
        </div>
    )
}

export default Header;