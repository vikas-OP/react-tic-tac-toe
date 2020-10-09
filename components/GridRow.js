import React from "react"
import GridButton from "./GridButton"

const GridRow = (props) => {
  const gridButtons = props.data.map((val, index) => (
    <GridButton
      key={index}
      data={val}
      changeData={() => {
        props.changeData(index)
      }}
    />
  ))
  return (
    <div className="row" style={{ height: "22vh", width: "51vw" }}>
      {gridButtons}
    </div>
  )
}

export default GridRow
