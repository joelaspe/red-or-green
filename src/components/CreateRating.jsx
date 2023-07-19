//const API_URL = 'https://red-or-green-ratings.onrender.com';

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
            <label htmlFor="comment-input">Comment</label>
            <input type="text" id="comment-input" onChange={handleCommentChange} value={commentText} />
            
            <label htmlFor="rating-input">Rate your experience (1-10)</label>
            <input type="number" id="rating-input" name="rating-input" min="1" max ="10" onChange={handleRatingChange}></input>
     
            <h1>Preferred chili?</h1>
            <input type="radio" id="red-or-green-radio-red" name="chili" value="red" onChange={handleRadioChange} checked={true}></input>
            <label htmlFor="red-or-green-radio-red">Red</label>
            <input type="radio" id="red-or-green-radio-green" name="chili" value="green" onChange={handleRadioChange}></input>
            <label htmlFor="red-or-green-radio-green">Green</label>
            <input type="radio" id="red-or-green-radio-christmas" name="chili" value="christmas" onChange={handleRadioChange}></input>
            <label htmlFor="red-or-green-radio-christmas">Christmas</label>
            
            <label htmlFor="price-input">Meal cost in $</label>
            <input type="number" id="price-input" name="price-input" min="1" max ="999" onChange={handlePriceChange}></input>
            
            <input type="submit" id="rating-form-btn"></input>
        </form>
        </>
    )
}

export default CreateRating;