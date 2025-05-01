"use client"

import { useEffect, useState } from "react"
import Confetti from "react-confetti"
import { useWindowSize } from "@/hooks/use-window-size"

export default function ConfettiEffect() {
  const { width, height } = useWindowSize()
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isActive) return null

  return (
    <Confetti
      width={width}
      height={height}
      recycle={false}
      numberOfPieces={100}
      gravity={0.3}
      colors={["#000000", "#333333", "#666666", "#999999", "#CCCCCC"]}
    />
  )
}
