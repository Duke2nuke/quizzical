"use client"

import MinimalBackground from "@/components/minimal-background"
import { motion } from "framer-motion"
import { User, Clock, Calendar } from "lucide-react"

export default function AccountPage() {
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
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-24 h-24 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center border-2 border-gray-200 dark:border-gray-700">
              <User className="w-12 h-12 text-gray-500 dark:text-gray-400" />
            </div>

            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Your Account</h1>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Manage your profile and quiz history</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                  <Clock className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Quizzes Completed</div>
                    <div className="font-medium text-gray-900 dark:text-white">12</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                  <Calendar className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Member Since</div>
                    <div className="font-medium text-gray-900 dark:text-white">April 2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Recent Activity</h2>

            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">General Knowledge Quiz</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Score: 8/10</div>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">2 days ago</div>
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
