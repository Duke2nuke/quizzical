"use client"

import MinimalBackground from "@/components/minimal-background"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Search, Users, Calendar, Clock } from "lucide-react"

export default function JoinQuizPage() {
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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Join a Quiz</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Enter a quiz code or browse available quizzes</p>

          <div className="flex gap-2 mb-8">
            <input
              type="text"
              placeholder="Enter quiz code"
              className="flex-1 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:border-transparent outline-none transition-all"
            />
            <Button className="bg-gray-900 hover:bg-gray-800 text-white dark:bg-white dark:hover:bg-gray-200 dark:text-gray-900">
              Join
            </Button>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Available Quizzes</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search quizzes"
                  className="pl-9 pr-4 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:border-transparent outline-none transition-all text-sm"
                />
              </div>
            </div>

            <div className="space-y-4">
              {[
                { title: "General Knowledge", participants: 24, date: "Today", time: "10 min" },
                { title: "Science Quiz", participants: 18, date: "Yesterday", time: "15 min" },
                { title: "History Challenge", participants: 32, date: "2 days ago", time: "20 min" },
              ].map((quiz, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">{quiz.title}</div>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Users className="w-3.5 h-3.5 mr-1" />
                          <span>{quiz.participants} participants</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="w-3.5 h-3.5 mr-1" />
                          <span>{quiz.date}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Clock className="w-3.5 h-3.5 mr-1" />
                          <span>{quiz.time}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Join
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  )
}
