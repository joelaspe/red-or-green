import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Restaurants from './components/Restaurants'
import Ratings from './components/Ratings'

function App() {
  
  const [ratings, setRatings] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  const getRestaurantData = async () => {
    //TODO: make api URL customizable (maybe dotenv npm module)
    const res = await fetch('http://localhost:3000/restaurant');
    const data = await res.json();
    setRestaurants(data);
    
  }
  console.log("Rendering App.jsx");
  // useEffect() used for loading data from the API
  useEffect(() => {
    console.log("Entering useEffect for currentRating again");
    getRestaurantData();
  }, []);

  // loads ratings if one restaurant is selected by the user
  const getRatingsData = async (id) => {
    //TODO: make api URL customizable (maybe dotenv npm module)
    const res = await fetch(`http://localhost:3000/ratings/restaurant/${id}`);
    const data = await res.json();
    setRatings(data);
  }
    
  //FIXME: Use ternary below the menu item
  if(restaurants.length === 0) {
    return <h1> Loading </h1>
  } else if(ratings.length === 0) {  // home screen, show the restaurants until one is clicked which will show the ratings page for that restaurant
    return (
      <>
        <Header setRatings={setRatings} />
        <div className="restaurants-container">
          <div className="column-left">Left Column</div>
          <Restaurants className="column-restaurants" restaurants={restaurants} getRatingsData={getRatingsData} />
          <div className="column-right">Right Column</div>
        </div>
      </>
    ) 
  } else {  // ratings page when ratings variable is filled in, happens when user clicks on a restaurant
    return (
      <>
        <Header setRatings={setRatings} />
        <div className="restaurants-container">
          <div className="column-left">Left Column</div>
          <Ratings className="column-restaurants" ratings={ratings} />
          <div className="column-right">Right Column</div>
        </div>
      </>
    )
  }
}

export default App
