"use client"

import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"

interface ProgressTrackerProps {
  currentQuestion: number
  totalQuestions: number
  score: number
}

export default function ProgressTracker({ currentQuestion, totalQuestions, score }: ProgressTrackerProps) {
  const progressPercentage = (currentQuestion / totalQuestions) * 100

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
          Question {currentQuestion} of {totalQuestions}
        </span>
        <motion.span
          className="text-sm font-medium text-gray-900 dark:text-white"
          key={score}
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.5 }}
        >
          Score: {score}/{currentQuestion - 1}
        </motion.span>
      </div>
      <Progress value={progressPercentage} className="h-2" indicatorClassName="bg-gray-900 dark:bg-white" />
    </div>
  )
}
