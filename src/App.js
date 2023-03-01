import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <Chessboard id="BasicBoard" />
    </div>
  );
}