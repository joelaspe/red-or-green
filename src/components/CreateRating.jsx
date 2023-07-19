const API_URL = 'https://red-or-green-ratings.onrender.com/';

import {useState} from 'react';

const CreateRating = ({ratings, loggedIn, getRatingsData, setCreateFormActive}) => {
    const [commentText, setCommentText] = useState('');
    const [redOrGreen, setRedOrGreen] = useState('red');
    const [ratingValue, setRatingValue] = useState('5');
    const [price, setPrice] = useState('12');

    const handleSubmit = (e) => {
        const postRating = async () => {
            const requestOptions =  {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify( { "email": loggedIn.email,
                                        "user_id": loggedIn.id, 
                                        "restaurant_id": ratings[0].restaurant_id,                                    "comment": commentText,
                                        "red_or_green": redOrGreen,
                                        "rating": ratingValue,
                                        "price": price })
                }
            const apiString =  `${API_URL}ratings/`;
            console.log(apiString);
            const response = await fetch(apiString, requestOptions);
            const data = await response.json();
            console.log(data);
            getRatingsData(ratings[0].restaurant_id, ratings[0].name)
            setCreateFormActive(false);
        }
        e.preventDefault();
        postRating();
        setCommentText('');
    }

    const handleCommentChange = (e) => {
        setCommentText(e.target.value);
    }

    const handleRadioChange = (e) => {
        setRedOrGreen(e.target.value);
    }

    const handleRatingChange = (e) => {
        setRatingValue(e.target.value);
    }

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    }
    
    return (
        <>
        <form onSubmit={handleSubmit}>
           
            <input className="input-field" placeholder="Detail your visit" type="text" id="comment-input" onChange={handleCommentChange} value={commentText} />
            <input className="input-field" placeholder="Rate the experience (1-10)" type="number" id="rating-input" name="rating-input" min="1" max ="10" onChange={handleRatingChange}></input>
            <div className="rating-radio">
                <h1>Preferred chili?</h1>
                <div>
                    <label>
                        <input type="radio" id="red-or-green-radio-red" name="radio" value="Red" onChange={handleRadioChange} checked={true}></input>
                        <span>Red</span>
                        
                    </label>
                    <label>
                        <input type="radio" id="red-or-green-radio-green" name="radio" value="Green" onChange={handleRadioChange}></input>
                            <span>Green</span>
                        
                    </label>
                    <label>
                        <input type="radio" id="red-or-green-radio-red" name="radio" value="Christmas" onChange={handleRadioChange}></input>
                            <span>Christmas</span>
                        
                    </label>
                </div>
            </div>
            <input className="input-field" placeholder="Price paid in $" type="number" id="price-input" name="price-input" min="1" max ="999" onChange={handlePriceChange}></input>
            
            <input type="submit" className="edit-delete-btn" value="Create Post" id="rating-form-btn"></input>
        </form>
        </>
    )
}

export default CreateRating;