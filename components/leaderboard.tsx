"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Trophy, Clock, User, Medal } from "lucide-react"

interface LeaderboardEntry {
  name: string
  score: number
  time: number
  rank: string
}

interface LeaderboardProps {
  userScore: number
  userTime: number
}

export default function Leaderboard({ userScore, userTime }: LeaderboardProps) {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])
  const [userRank, setUserRank] = useState(0)

  // Format time spent
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}m ${secs}s`
  }

  useEffect(() => {
    // Generate fake leaderboard data
    const generateLeaderboard = () => {
      const names = ["Emma", "Liam", "Olivia", "Noah", "Ava", "Ethan", "Sophia", "Mason", "Isabella", "Logan", "You"]

      const fakeLeaderboard: LeaderboardEntry[] = []

      // Create random scores and times for fake users
      names.forEach((name, index) => {
        if (name === "You") {
          fakeLeaderboard.push({
            name,
            score: userScore,
            time: userTime,
            rank: getRankFromScore(userScore),
          })
        } else {
          // Generate random scores between 3 and 10
          const randomScore = Math.floor(Math.random() * 8) + 3
          // Generate random times between 30s and 3m
          const randomTime = Math.floor(Math.random() * 150) + 30

          fakeLeaderboard.push({
            name,
            score: randomScore,
            time: randomTime,
            rank: getRankFromScore(randomScore),
          })
        }
      })

      // Sort by score (descending) and then by time (ascending)
      fakeLeaderboard.sort((a, b) => {
        if (b.score !== a.score) {
          return b.score - a.score
        }
        return a.time - b.time
      })

      // Find user's position
      const userPosition = fakeLeaderboard.findIndex((entry) => entry.name === "You") + 1
      setUserRank(userPosition)

      return fakeLeaderboard
    }

    const getRankFromScore = (score: number) => {
      const percentage = (score / 10) * 100

      if (percentage >= 90) return "Master"
      else if (percentage >= 80) return "Expert"
      else if (percentage >= 70) return "Advanced"
      else if (percentage >= 60) return "Intermediate"
      else if (percentage >= 40) return "Beginner"
      else return "Novice"
    }

    setLeaderboard(generateLeaderboard())
  }, [userScore, userTime])

  return (
    <div className="bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200 dark:border-gray-700 shadow-lg">
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
        <Trophy className="w-5 h-5 text-gray-900 dark:text-white" />
        Leaderboard
      </h3>

      <div className="overflow-hidden">
        <div className="grid grid-cols-4 gap-2 py-2 px-3 bg-gray-100/50 dark:bg-gray-800/80 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400">
          <div>Rank</div>
          <div>Name</div>
          <div>Score</div>
          <div>Time</div>
        </div>

        <div className="mt-2 space-y-1">
          {leaderboard.map((entry, index) => {
            const isUser = entry.name === "You"
            const delay = index * 0.1

            // Determine rank icon and style
            let RankIcon = null
            let rankColor = ""

            if (index === 0) {
              RankIcon = Trophy
              rankColor = "text-gray-900 dark:text-white"
            } else if (index === 1) {
              RankIcon = Medal
              rankColor = "text-gray-600 dark:text-gray-400"
            } else if (index === 2) {
              RankIcon = Medal
              rankColor = "text-gray-500 dark:text-gray-500"
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay }}
                className={`grid grid-cols-4 gap-2 py-2 px-3 rounded-lg ${
                  isUser
                    ? "bg-gray-100 dark:bg-gray-800 font-medium border border-gray-200 dark:border-gray-700"
                    : "hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-colors"
                }`}
              >
                <div className="flex items-center">
                  {RankIcon && <RankIcon className={`w-4 h-4 mr-1 ${rankColor}`} />}
                  <span className={index < 3 ? rankColor : ""}>{index + 1}</span>
                </div>
                <div className="flex items-center gap-1">
                  {isUser ? <User className="w-4 h-4 text-gray-900 dark:text-white" /> : null}
                  <span>{entry.name}</span>
                </div>
                <div>{entry.score}/10</div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{formatTime(entry.time)}</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {userRank > 0 && (
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <span className="text-gray-600 dark:text-gray-400">Your rank: </span>
            <span className="font-bold text-gray-900 dark:text-white">#{userRank}</span>
            <span className="text-gray-600 dark:text-gray-400"> out of {leaderboard.length}</span>
          </div>
        </motion.div>
      )}
    </div>
  )
}
