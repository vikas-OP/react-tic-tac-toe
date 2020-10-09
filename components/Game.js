import React from "react"
import Grid from "./Grid"

const data = []
for (let i = 0; i < 3; i++) {
  data[i] = []
  for (let j = 0; j < 3; j++) {
    data[i].push("")
  }
}

const Game = () => {
  const gameData = localStorage.getItem("gameData")
    ? JSON.parse(localStorage.getItem("gameData"))
    : data
  const gamePlayerTurn = localStorage.getItem("playerTurn")
    ? localStorage.getItem("playerTurn")
    : "1"
  return (
    <>
      <div className="container d-flex justify-content-center flex-wrap">
        <Grid data={gameData} playerTurn={gamePlayerTurn} />
      </div>
    </>
  )
}

export default Game
