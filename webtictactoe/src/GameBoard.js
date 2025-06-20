import React from "react";
import "./GameBoard.css";

/**
 * PUBLIC_INTERFACE
 * GameBoard component renders a centered 3x3 Tic Tac Toe grid.
 * Uses: 
 *   - Primary:   #4CAF50 (marks/grid lines)
 *   - Secondary: #FFC107 (background/cell hover)
 *   - Accent:    #2196F3 (cell highlight)
 * Light, minimal layout.
 */
export default function GameBoard() {
  // Row/column indexes for easy mapping
  const size = 3;
  return (
    <div className="ttt-board-outer">
      <div className="ttt-board-grid">
        {[...Array(size * size)].map((_, idx) => (
          <div key={idx} className="ttt-board-cell"></div>
        ))}
      </div>
    </div>
  );
}
