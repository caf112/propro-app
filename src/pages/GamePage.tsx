import * as GameContents from "components/features/game/Index"
import * as Layouts from "components/layouts/Index"
import * as Elements from "components/elements/Index"
import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom"

const GamePage = () => {

  const [isLoading,setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    },1000)

    return () => clearTimeout(timeout)
  },[location.pathname])

  return (
    <div className="app-container">
      {isLoading && <Elements.Loader />}
      {!isLoading && (
        <>
          <Layouts.Header />
          <GameContents.CodeGame />
          <Layouts.Footer />
        </>
      )}
    </div>
  )
}

export default GamePage