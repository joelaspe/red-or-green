import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Restaurants from './components/Restaurants'
import Ratings from './components/Ratings'

function App() {
  
  const [ratings, setRatings] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  // FIXME: Implement actual login instead of hard-coded user
  const [loggedIn, setLoggedIn] = useState('albertalonzo@gmail.com');

  const getRestaurantData = async () => {
    //TODO: make api URL customizable (maybe dotenv npm module)
    const res = await fetch('http://localhost:3000/restaurant');
    const data = await res.json();
    setRestaurants(data);
    
  }
  // useEffect() used for loading data from the API
  useEffect(() => {
    getRestaurantData();
  }, []);

  // loads ratings if one restaurant is selected by the user
  const getRatingsData = async (id) => {
    //TODO: make api URL customizable (maybe dotenv npm module)
    const res = await fetch(`http://localhost:3000/ratings/restaurant/${id}`);
    const data = await res.json();
    setRatings(data);
  }
    
  if(restaurants.length === 0) {
    return <h1> Loading </h1>
  } else { 
    return (
      <>
        <Header setRatings={setRatings} loggedIn={loggedIn} />
        <div className="restaurants-container">
          <div className="column-left">Left Column</div>
          {(ratings.length === 0) ? <Restaurants className="column-restaurants" restaurants={restaurants} getRatingsData={getRatingsData} /> : <Ratings className="column-restaurants" ratings={ratings} /> }
          <div className="column-right">Right Column</div>
        </div>
      </>
    ) 
  }
}

export default App
