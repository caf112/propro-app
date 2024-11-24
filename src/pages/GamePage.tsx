import * as GameContents from "components/features/game/Index"
import * as Layouts from "components/layouts/Index"
import React from 'react'

const GamePage = () => {
  return (
    <div>
      <Layouts.Header />
      <GameContents.CodeGame />
      <Layouts.Footer />
    </div>
  )
}

export default GamePage