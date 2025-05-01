"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

interface RankTrackerProps {
  rank: string
  score: number
  total: number
}

export default function RankTracker({ rank, score, total }: RankTrackerProps) {
  // Calculate percentage for the progress indicator
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0

  return (
    <motion.div
      className="px-4 py-2 rounded-full bg-white/80 dark:bg-gray-900/80 text-gray-900 dark:text-white font-medium flex items-center gap-2 backdrop-blur-sm shadow-md border border-gray-200 dark:border-gray-800"
      key={rank}
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Star className="w-4 h-4 text-gray-900 dark:text-white" />
      <span className="font-bold">{rank}</span>
      {total > 0 && <span className="text-xs">({percentage}%)</span>}
    </motion.div>
  )
}
