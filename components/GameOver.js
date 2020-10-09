import React from "react"

const GameOver = (props) => {
  return (
    <div className="container d-flex justify-content-center py-2 flex-column">
      <p className="display-4 text-white text-center">
        {props.playerWon != 3
          ? `Player ${props.playerWon} Won!`
          : `It's a draw`}
      </p>
      <div className="d-flex align-items-center justify-content-center">
        <button className="btn btn-danger" onClick={props.resetGame}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default GameOver
