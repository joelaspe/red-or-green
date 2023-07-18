import Rating from './Rating'

const Ratings = ({ ratings }) => {
    
    
    return (
        <div className="column-ratings">
            <h1 id="rating-title">{ratings[0].name}</h1>
            {ratings.map((rating) => (
                <Rating rating={rating} key={"rating-" + rating.rating_id} />
            ))}
        </div>
    )

}

export default Ratings;