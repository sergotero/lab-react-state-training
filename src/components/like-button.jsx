import { useState } from "react";

function LikeButton(){
  
  const [likes, setLikes] = useState(0);

  const updatesLikes = () => {setLikes(likes + 1)}

  return(
    <button className="btn bg-dark text-light m-2" type="button" onClick={updatesLikes}>{`${likes} Likes`}</button>
  );
}

export default LikeButton;