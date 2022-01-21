import React from "react";
import '../App.css'
import { Link } from "react-router-dom";
import background from "../images/video-game-candy.jpg"
function GameStart() {
  return (
    <div className="GameStart">
      <Link to="/game" className="linkid">
        <h2>Game Start</h2>
      </Link>
    </div>
  );
}

export default GameStart;

// style={{
//         backgroundImage: `url(${background})`,
//         backgroundRepeat: "no-repeat",
//       }}>