"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function MinimalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Star properties
    interface Star {
      x: number
      y: number
      size: number
      opacity: number
      twinkleSpeed: number
      twinkleDirection: number
    }

    // Create stars
    const stars: Star[] = []
    const starCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 6000), 100)

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
        twinkleSpeed: Math.random() * 0.005 + 0.002,
        twinkleDirection: Math.random() > 0.5 ? 1 : -1,
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star) => {
        // Update star twinkle
        star.opacity += star.twinkleSpeed * star.twinkleDirection
        if (star.opacity > 0.8) {
          star.twinkleDirection = -1
        } else if (star.opacity < 0.2) {
          star.twinkleDirection = 1
        }

        // Draw star
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)

        // Use purple for some stars in dark mode
        const isDarkMode = document.documentElement.classList.contains("dark")
        const color =
          isDarkMode && Math.random() > 0.7
            ? `rgba(190, 149, 255, ${star.opacity})`
            : `rgba(255, 255, 255, ${star.opacity})`

        ctx.fillStyle = color
        ctx.fill()

        // Add glow effect for some stars
        if (star.size > 1.2) {
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2)
          const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 2)

          const glowColor =
            isDarkMode && Math.random() > 0.5
              ? `rgba(190, 149, 255, ${star.opacity * 0.4})`
              : `rgba(255, 255, 255, ${star.opacity * 0.4})`

          gradient.addColorStop(0, glowColor)
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)")
          ctx.fillStyle = gradient
          ctx.fill()
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
}
