import Restaurant from './Restaurant'

const Restaurants = ({ restaurants, getRatingsData }) => {
    return (
        <div className="column-restaurants">
            {restaurants.map((restaurant, index) => (
                <Restaurant className="restaurant" restaurant={restaurant} getRatingsData={getRatingsData} key={restaurant.id} />
            ))}
        </div>
    )

}

export default Restaurants;