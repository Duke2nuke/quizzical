"use client"

import { BookOpen } from "lucide-react"
import { motion } from "framer-motion"

interface LogoProps {
  size?: "sm" | "md" | "lg"
}

export default function Logo({ size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  }

  const iconSizes = {
    sm: 18,
    md: 24,
    lg: 32,
  }

  return (
    <div className="flex items-center gap-2">
      <motion.div
        className="relative flex items-center justify-center"
        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          <BookOpen size={iconSizes[size]} className="text-gray-900 dark:text-white" />
          <motion.div
            className="absolute inset-0 bg-gray-900 dark:bg-white rounded-full mix-blend-multiply dark:mix-blend-screen"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 3,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
      <motion.span
        className={`font-bold tracking-tight ${sizeClasses[size]} text-gray-900 dark:text-white`}
        initial={{ opacity: 0, x: -5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        Quizzical
      </motion.span>
    </div>
  )
}
