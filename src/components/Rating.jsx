import EditRating from './EditRating';
import {useState} from 'react';

const Rating = ({rating, loggedIn, getRatingsData}) => {

  const [editActive, setEditActive] = useState(false);

  const handleEditClick = () => {
    setEditActive(true);
  }

  const handleDeleteClick = () => {
    const deleteRecord = async () => {
      const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' 
      }};
      const apiString = 'http://localhost:3000/' + 'ratings/' + rating.rating_id + '/';
      const response = await fetch(apiString, requestOptions)
      const data = await response.json();
      console.log(data);

    }
    deleteRecord();
  }
  return (
    <div className="rating">
      <h1>{rating.email} posted..</h1>   
      <h3>{rating.comment}</h3>
      <h3>Rating: {rating.rating}</h3>
      <h3>Red or Green? {rating.red_or_green}</h3>
      <h3>Price Paid: ${rating.price}</h3>
      {(loggedIn && editActive) ?  <EditRating rating={rating} getRatingsData={getRatingsData} setEditActive={setEditActive} /> : null}
      {(loggedIn && !editActive) ? <><button onClick={handleEditClick}>Click to Edit</button><button onClick={handleDeleteClick}>Click to Delete Post</button> </> : <h1>Login to edit or delete rating</h1>}
    </div>
 )
}

export default Rating;