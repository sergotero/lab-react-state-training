import { useState } from "react";

function LikeButton(){
  
  const [likes, setLikes] = useState(0);

  const updatesLikes = () => {setLikes(likes + 1)}

  return(
    <button className="button bg-dark text-light" type="button" onClick={updatesLikes}>{`${likes} Likes`}</button>
  );
}

export default LikeButton;