"use client"

import { motion } from "framer-motion"
import { ThumbsUp, ThumbsDown } from "lucide-react"

interface CharacterReactionProps {
  isCorrect: boolean
}

export default function CharacterReaction({ isCorrect }: CharacterReactionProps) {
  return (
    <motion.div
      className="absolute left-1/2 transform -translate-x-1/2"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {isCorrect ? (
        <div className="flex flex-col items-center">
          <motion.div
            className="relative"
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, repeatType: "reverse" }}
          >
            <div className="relative w-16 h-16 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-lg">
              <ThumbsUp className="w-8 h-8 text-gray-900 dark:text-white" />
              <motion.div
                className="absolute -inset-1 rounded-full opacity-50 bg-gray-100 dark:bg-gray-800"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              />
            </div>
          </motion.div>
          <motion.div
            className="mt-2 font-bold text-gray-900 dark:text-white"
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, 1.2, 1] }}
            transition={{ duration: 0.5 }}
          >
            Excellent!
          </motion.div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <motion.div
            className="relative"
            animate={{ rotate: [0, 5, -5, 5, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, repeatType: "reverse" }}
          >
            <div className="relative w-16 h-16 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-lg">
              <ThumbsDown className="w-8 h-8 text-gray-900 dark:text-white" />
              <motion.div
                className="absolute -inset-1 rounded-full opacity-50 bg-gray-100 dark:bg-gray-800"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              />
            </div>
          </motion.div>
          <motion.div
            className="mt-2 font-bold text-gray-900 dark:text-white"
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, 1.2, 1] }}
            transition={{ duration: 0.5 }}
          >
            Try Again!
          </motion.div>
        </div>
      )}
    </motion.div>
  )
}
