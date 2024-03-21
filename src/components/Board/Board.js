import React, { useContext } from "react";
import "./Board.css";
import { GameState } from "../../app/GameState";
import Tile from "../Tile/Tile";

export default (props) => {
  const { board } = useContext(GameState);
  return (
    <div className="Board">
      {board.tiles.map((row, r) => (
        <div className="columns is-mobile is-centered">
          {row.map((col, c) => (
            <div className="column is-narrow">
              <Tile color={col} position={[r, c]} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
