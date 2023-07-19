//const API_URL = 'https://red-or-green-ratings.onrender.com';

import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Restaurants from './components/Restaurants'
import Ratings from './components/Ratings'

function App() {
  
  const [ratings, setRatings] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  // FIXME: Implement actual login instead of hard-coded user
  const [loggedIn, setLoggedIn] = useState({email: 'albertalonzo@gmail.com', id: 1});

  const getRestaurantData = async () => {
    //TODO: make api URL customizable (maybe dotenv npm module)
    const res = await fetch(`${API_URL}restaurant`);
    const data = await res.json();
    setRestaurants(data);
    
  }
  // useEffect() used for loading data from the API
  useEffect(() => {
    getRestaurantData();
  }, []);

  // loads ratings if one restaurant is selected by the user
  const getRatingsData = async (id, name) => {
    //TODO: make api URL customizable (maybe dotenv npm module)
      const res = await fetch(`${API_URL}ratings/restaurant/${id}`);
      if(res.status === 200) {
        const data = await res.json();
        setRatings(data);
      } else {
        setRatings([{"name": name, "restaurant_id": id, "email": "nobody", "comment": "No records exist yet, create one now!", "rating": null, "price": null, "red_or_green": null }])
      }

    }
    
  if(restaurants.length === 0) {
    return <h1> Loading </h1>
  } else { 
    return (
      <>
        <Header setRatings={setRatings} loggedIn={loggedIn} />
        <div className="restaurants-container">
          <div className="column-left"></div>
          {(ratings.length === 0) ? <Restaurants className="column-restaurants" restaurants={restaurants} getRatingsData={getRatingsData} /> : <Ratings className="column-restaurants" ratings={ratings} loggedIn={loggedIn} getRatingsData={getRatingsData} /> }
          <div className="column-right"></div>
        </div>
      </>
    ) 
  }
}

export default App
