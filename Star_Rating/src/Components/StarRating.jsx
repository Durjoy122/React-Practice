import { useState } from "react";
import Star from './Star';

function StarRating({maxStars = 5}) {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  let handleRatingClick = (index) => {
      if(rating == index + 1) {
         setRating(0);
      }
      else {
         setRating(index+1);
      }
  }
  return (
    <div>
       {[...Array(maxStars)].map((_,i) => (
            <Star 
                key={i}
                filled={i < rating}
                hovered={i < hovered}
                onClick={() => handleRatingClick(i)}
                onMouseEnter={() => setHovered(i + 1)}
                onMouseLeave={() => setHovered(0)}
            />
       ))}
        <p>Rating: {rating}</p>
    </div>
  )
}

export default StarRating;
