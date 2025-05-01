"use client"

import MinimalBackground from "@/components/minimal-background"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export default function MakeQuizPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-start p-4 md:p-24 overflow-hidden">
      <MinimalBackground />

      <motion.div
        className="w-full max-w-3xl relative z-10 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-xl border border-gray-200 dark:border-gray-800 shadow-xl p-6 md:p-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Create a Quiz</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Design your own quiz and share it with friends</p>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Quiz Title</label>
              <input
                type="text"
                placeholder="Enter quiz title"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
              <textarea
                placeholder="Enter quiz description"
                rows={3}
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">Questions</h2>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <PlusCircle className="w-4 h-4" />
                  <span>Add Question</span>
                </Button>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                  <div className="font-medium text-gray-900 dark:text-white mb-2">Question 1</div>
                  <input
                    type="text"
                    placeholder="Enter your question"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:border-transparent outline-none transition-all mb-3"
                  />

                  <div className="space-y-2 mt-3">
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Options</div>
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex gap-2">
                        <input
                          type="text"
                          placeholder={`Option ${i}`}
                          className="flex-1 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:border-transparent outline-none transition-all"
                        />
                        <div className="flex items-center">
                          <input type="radio" name="correct-answer" id={`option-${i}`} className="mr-2" />
                          <label htmlFor={`option-${i}`} className="text-sm text-gray-600 dark:text-gray-400">
                            Correct
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white dark:bg-white dark:hover:bg-gray-200 dark:text-gray-900">
                Create Quiz
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  )
}
