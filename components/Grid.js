import React, { useState, useEffect } from "react"
import GridRow from "./GridRow"
import Info from "./Info"
import GameOver from "./GameOver"

const Grid = (props) => {
  const [data, setData] = useState(props.data)
  const [playerTurn, setPlayerTurn] = useState(props.playerTurn)
  const [playerWon, setPlayerWon] = useState("")

  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      if (
        data[i][0] != "" &&
        data[i][0] == data[i][1] &&
        data[i][1] == data[i][2]
      ) {
        data[i][0] == "o" ? setPlayerWon(1) : setPlayerWon(2)

        return
      }
      if (
        data[0][i] != "" &&
        data[0][i] == data[1][i] &&
        data[1][i] == data[2][i]
      ) {
        data[0][i] == "o" ? setPlayerWon(1) : setPlayerWon(2)

        return
      }
    }
    if (
      data[0][0] != "" &&
      data[0][0] == data[1][1] &&
      data[1][1] == data[2][2]
    ) {
      data[0][0] == "o" ? setPlayerWon(1) : setPlayerWon(2)

      return
    }

    if (
      data[2][0] != "" &&
      data[2][0] == data[1][1] &&
      data[1][1] == data[0][2]
    ) {
      data[2][0] == "o" ? setPlayerWon(1) : setPlayerWon(2)

      return
    }

    let count = 0
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (data[i][j]) {
          count++
        }
      }
    }
    if (count == 9) {
      //It's a draw
      setPlayerWon(3)
    }
  }, [data])

  const changeData = (i, j) => {
    const newValue = playerTurn == "1" ? "o" : "x"
    const newData = [...data]
    newData[i][j] = newValue
    const newPlayerTurn = playerTurn == "1" ? "2" : "1"
    setData(newData)
    setPlayerTurn(newPlayerTurn)
    localStorage.setItem("gameData", JSON.stringify(newData))
    localStorage.setItem("playerTurn", newPlayerTurn)
  }

  const resetGame = () => {
    const newData = []
    for (let i = 0; i < 3; i++) {
      newData[i] = []
      for (let j = 0; j < 3; j++) {
        newData[i][j] = ""
      }
    }
    setPlayerWon("")
    setData(newData)
    setPlayerTurn("1")
    localStorage.setItem("gameData", JSON.stringify(newData))
    localStorage.setItem("playerTurn", "1")
  }

  const gridRows = data.map((val, index) => (
    <GridRow key={index} data={val} changeData={(j) => changeData(index, j)} />
  ))

  return (
    <>
      {playerWon ? (
        <GameOver playerWon={playerWon} resetGame={resetGame} />
      ) : (
        <>
          <div className="container d-flex justify-content-center py-2">
            <Info playerTurn={playerTurn} resetGame={resetGame} />
          </div>

          {gridRows}
        </>
      )}
    </>
  )
}

export default Grid
