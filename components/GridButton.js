import React, { useState } from "react"

const GridButton = (props) => {
  const style = { border: "2px solid white" }

  const clickFunction = (e) => {
    if (props.data) {
      return
    }
    props.changeData()
  }

  return (
    <div className="col-4 d-flex align-items-center px-0 " style={style}>
      <button
        className="btn w-100 h-100 text-center"
        style={{ background: "#ffcdb2", fontSize: "3rem" }}
        onClick={(e) => clickFunction(e)}
      >
        {props.data ? (props.data == "o" ? "🔴" : "❌") : null}
      </button>
    </div>
  )
}

export default GridButton
