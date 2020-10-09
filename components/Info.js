import React from "react"

const Info = (props) => {
  const style1 = props.playerTurn == "1" ? { color: "red" } : null
  const style2 = props.playerTurn == "2" ? { color: "red" } : null
  return (
    <div className="row text-white" style={{ width: "51vw" }}>
      <div className="col-5 text-center">
        <h3 style={style1}>Player 1</h3>
      </div>
      <div className="col-2">
        <button className="btn btn-danger" onClick={props.resetGame}>
          Reset
        </button>
      </div>
      <div className="col-5 text-center">
        <h3 style={style2}>Player 2</h3>
      </div>
    </div>
  )
}

export default Info
