import React from "react"
import Header from "./Header"
import Game from "./Game"

const App = () => {
  return (
    <div className="container-fluid bg-dark min-vh-100">
      <Header />

      <Game />
    </div>
  )
}

export default App
