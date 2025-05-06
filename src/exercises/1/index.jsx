import { useState } from "react";
import "./index.css";

// 🐨
// to fix the likes counter so that it updates correctly when the button is clicked. Specifically:
// When the user clicks the button, the likes count should increase by 1 if the button changes to "👍" (like).
// When the user clicks the button again, the likes count should decrease by 1 if the button changes to "👎" (unlike).

function Exercise1() {
  const [isLike, setIsLike] = useState(false);
  const [likes, setLikes] = useState(0);

  function handleOnLike() {
    setIsLike((isLike) => !isLike);
    setLikes((prev) => prev + (isLike ? -1 : 1));
  }

  return (
    <div className="exercise1">
      <h1>Exercise 1: Fix the Likes Counter</h1>
      <div>
        <button onClick={handleOnLike}>
          {isLike ? <div>👍</div> : <div>👎</div>}{" "}
        </button>
        {likes}
      </div>
    </div>
  );
}

export default Exercise1;
