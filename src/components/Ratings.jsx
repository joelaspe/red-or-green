import Rating from './Rating'
import CreateRating from './CreateRating'
import {useState} from 'react';

const Ratings = ({ ratings, loggedIn, getRatingsData }) => {
    const [createFormActive, setCreateFormActive] = useState(false);

    const handleClick = () => {
        setCreateFormActive(true);
    }
    if(createFormActive) {
        return <CreateRating ratings={ratings} loggedIn={loggedIn} getRatingsData={getRatingsData} setCreateFormActive={setCreateFormActive} />
    }
    
    if(ratings[0].email === "nobody") {
        return ( 
        <>
            <h1 id="rating-title">No ratings on record for {ratings[0].name}</h1>
            {(loggedIn) ? <button onClick={handleClick}>Create new post</button> : null}
        </>
        )
    }
    
    return (
        <div className="column-ratings">
            <h1 id="rating-title">{ratings[0].name}</h1>
            {(loggedIn)? <button onClick={handleClick}>Create new post</button> : null}
            {ratings.map((rating) => (
                <Rating rating={rating} loggedIn={loggedIn} getRatingsData={getRatingsData} key={"rating-" + rating.rating_id} />
            ))}
        </div>
    )

}

export default Ratings;