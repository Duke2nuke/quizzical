"use client"

import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, XCircle } from "lucide-react"

interface AnswerAnimationProps {
  isCorrect: boolean
  isVisible: boolean
}

export default function AnswerAnimation({ isCorrect, isVisible }: AnswerAnimationProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className={`absolute inset-0 ${
              isCorrect ? "bg-green-500/10 dark:bg-green-500/20" : "bg-red-500/10 dark:bg-red-500/20"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            {isCorrect ? (
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-white dark:bg-gray-900 p-6 shadow-lg">
                  <CheckCircle size={60} className="text-green-500" />
                </div>
                <motion.p
                  className="mt-4 text-xl font-bold text-white bg-green-500 px-4 py-1 rounded-full shadow-lg"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Correct!
                </motion.p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-white dark:bg-gray-900 p-6 shadow-lg">
                  <XCircle size={60} className="text-red-500" />
                </div>
                <motion.p
                  className="mt-4 text-xl font-bold text-white bg-red-500 px-4 py-1 rounded-full shadow-lg"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Incorrect!
                </motion.p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
