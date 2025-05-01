"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Wait for component to mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`
        relative flex h-8 w-16 items-center justify-center rounded-full p-1 transition-colors
        ${isDark ? "bg-gray-700" : "bg-gray-200"}
      `}
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>

      {/* Track icons */}
      <Sun
        className="absolute left-2 h-5 w-5 text-yellow-500 transition-opacity"
        style={{ opacity: isDark ? 0.5 : 1 }}
      />
      <Moon
        className="absolute right-2 h-5 w-5 text-blue-300 transition-opacity"
        style={{ opacity: isDark ? 1 : 0.5 }}
      />

      {/* Thumb/Handle */}
      <motion.span
        className="absolute h-6 w-6 rounded-full bg-white shadow-md"
        animate={{ x: isDark ? "100%" : "0%" }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        style={{ left: "2px", translateX: isDark ? "calc(100% - 4px)" : "0%" }}
      />
    </button>
  )
}
