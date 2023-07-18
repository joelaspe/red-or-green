const Restaurant = ({ restaurant, getRatingsData }) => {
    
    
    const handleClick = (e) => {
        getRatingsData(e.currentTarget.id, restaurant.name);
    }
    // FIXME: add formatting to the phone number
    // TODO: add color change for red or green or christmas preferences
    return (
       <div className = "restaurant" onClick = {handleClick} id={restaurant.id}>
            <h1>{restaurant.name}</h1>
            <h3>Avg Rating: {restaurant.rating}</h3>
            <h3>Avg Price: {restaurant.price_avg}</h3>
            <h3>Red or Green? {restaurant.red_or_green}</h3>   
            <h3>Address: {restaurant.address}</h3>
            <h3>Phone: {restaurant.phone}</h3>
       </div>
    )
   }
   
   export default Restaurant;