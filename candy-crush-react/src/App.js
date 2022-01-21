import React from "react";
import GameBoard from "./GameBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameStart from "./component/GameStart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GameStart />} />
        <Route path="/game" element={<GameBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
