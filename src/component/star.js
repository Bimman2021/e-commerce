import React, { useState } from "react";

const Star = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <div>
      <ul className="ratings">
        {[1, 2, 3, 4, 5].map((index) => (
          <li key={index}>
            <i
              className={
                index <= rating ? "iconly-Star icbo" : "iconly-Star icbo empty"
              }
              onClick={() => handleStarClick(index)}
            ></i>
          </li>
        ))}
      </ul>
      <p>Your rating: {rating}</p>
    </div>
  );
};

export default Star;
