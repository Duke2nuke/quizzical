"use client"

import { motion } from "framer-motion"
import type { QuestionType } from "@/types/quiz-types"
import { CheckCircle2, XCircle } from "lucide-react"

interface QuestionProps {
  question: QuestionType
  selectedOption: string | null
  showFeedback: boolean
  onOptionSelect: (option: string) => void
}

export default function Question({ question, selectedOption, showFeedback, onOptionSelect }: QuestionProps) {
  const isCorrect = selectedOption === question.correctAnswer

  return (
    <div className="my-6">
      <motion.h2
        className="mb-6 text-xl font-semibold text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {question.questionText}
      </motion.h2>

      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedOption === option
          const isCorrectOption = option === question.correctAnswer

          let optionClasses = "p-4 border rounded-full cursor-pointer transition-all"

          // Base styling
          if (isSelected) {
            optionClasses += " border-2"
          } else {
            optionClasses += " hover:bg-gray-100 dark:hover:bg-gray-800/50"
          }

          // Feedback styling
          if (showFeedback) {
            if (isCorrectOption) {
              optionClasses += " bg-gray-100 dark:bg-gray-800/50 border-gray-900 dark:border-white"
            } else if (isSelected) {
              optionClasses += " bg-gray-100 dark:bg-gray-800/50 border-gray-400 dark:border-gray-600"
            }
          } else if (isSelected) {
            optionClasses += " border-gray-900 dark:border-white bg-gray-100 dark:bg-gray-800/50"
          }

          return (
            <motion.div
              key={option}
              className={optionClasses}
              onClick={() => onOptionSelect(option)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-900 dark:text-white">{option}</span>
                {showFeedback &&
                  isSelected &&
                  (isCorrect ? (
                    <CheckCircle2 className="h-5 w-5 text-gray-900 dark:text-white" />
                  ) : (
                    <XCircle className="h-5 w-5 text-gray-900 dark:text-white" />
                  ))}
                {showFeedback && isCorrectOption && !isSelected && (
                  <CheckCircle2 className="h-5 w-5 text-gray-900 dark:text-white" />
                )}
              </div>
            </motion.div>
          )
        })}
      </div>

      {showFeedback && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-4 p-3 rounded-lg ${
            isCorrect
              ? "bg-gray-100 text-gray-900 border border-gray-200 dark:bg-gray-800/50 dark:text-white dark:border-gray-700"
              : "bg-gray-100 text-gray-900 border border-gray-200 dark:bg-gray-800/50 dark:text-white dark:border-gray-700"
          }`}
        >
          {isCorrect ? <p>Correct! Well done.</p> : <p>Incorrect. The correct answer is: {question.correctAnswer}</p>}
        </motion.div>
      )}
    </div>
  )
}
