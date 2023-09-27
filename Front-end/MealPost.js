import React from 'react';
import './MealPost.css'; // Import the CSS file

function MealPost({ meal }) {
  return (
    <div className="meal-post">
      <h3>{meal.title}</h3>
      <p>{meal.description}</p>
      <div className="meal-details">
        {/* Display meal details, images, and interactions like likes and comments */}
      </div>
    </div>
  );
}

export default MealPost;
