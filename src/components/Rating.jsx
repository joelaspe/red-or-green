const Rating = ({rating}) => {
 return (
    <div className="rating">
      <h1>{rating.email} posted..</h1>   
      <h3>{rating.comment}</h3>
      <h3>Rating: {rating.rating}</h3>
      <h3>Price Paid: ${rating.price}</h3>
    </div>
 )
}

export default Rating;