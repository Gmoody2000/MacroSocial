import React, { useState, useEffect } from 'react';
import MealPost from './MealPost';
import './Feed.css'; // Import the CSS file

function Feed() {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    // Fetch user's feed data from the server and update feedData state
  }, []);

  return (
    <div className="feed">
      {feedData.map((meal) => (
        <MealPost key={meal.id} meal={meal} />
      ))}
    </div>
  );
}

export default Feed;
