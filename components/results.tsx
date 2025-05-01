"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { QuestionType } from "@/types/quiz-types"
import { CheckCircle2, XCircle, Clock, Trophy, Medal, Star } from "lucide-react"
import { motion } from "framer-motion"
import Leaderboard from "@/components/leaderboard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ResultsProps {
  score: number
  totalQuestions: number
  onRestart: () => void
  questions: QuestionType[]
  userAnswers: string[]
  finalRank: string
  timeSpent: number
}

export default function Results({
  score,
  totalQuestions,
  onRestart,
  questions,
  userAnswers,
  finalRank,
  timeSpent,
}: ResultsProps) {
  const percentage = Math.round((score / totalQuestions) * 100)

  let resultMessage = ""

  if (percentage >= 80) {
    resultMessage = "Excellent performance! You're a quiz master!"
  } else if (percentage >= 60) {
    resultMessage = "Great job! Your knowledge is impressive!"
  } else if (percentage >= 40) {
    resultMessage = "Good effort, but there's room for improvement."
  } else {
    resultMessage = "Keep practicing to improve your score."
  }

  // Format time spent
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}m ${secs}s`
  }

  return (
    <motion.div className="space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <Card className="w-full overflow-visible rounded-xl border backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 shadow-xl">
        <CardContent className="pt-6">
          <div className="text-center mb-6">
            <motion.div
              className="inline-block mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
              <Star className="w-12 h-12 text-gray-900 dark:text-white drop-shadow-lg" />
            </motion.div>

            <motion.h2
              className="text-3xl font-bold mb-2 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Quiz Results
            </motion.h2>

            <motion.div
              className="text-6xl font-bold mb-4 text-gray-900 dark:text-white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              {score}/{totalQuestions}
            </motion.div>

            <motion.p
              className="text-xl font-medium text-gray-900 dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {resultMessage}
            </motion.p>

            <motion.div
              className="mt-4 flex justify-center gap-6 text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-1">
                <Trophy className="w-4 h-4" />
                <span>Rank: {finalRank}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>Time: {formatTime(timeSpent)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Medal className="w-4 h-4" />
                <span>{percentage}%</span>
              </div>
            </motion.div>
          </div>

          <Tabs defaultValue="leaderboard" className="mt-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
              <TabsTrigger value="answers">Your Answers</TabsTrigger>
            </TabsList>
            <TabsContent value="leaderboard" className="mt-4">
              <Leaderboard userScore={score} userTime={timeSpent} />
            </TabsContent>
            <TabsContent value="answers" className="mt-4">
              <div className="space-y-6">
                {questions.map((question, index) => {
                  const userAnswer = userAnswers[index]
                  const isCorrect = userAnswer === question.correctAnswer

                  return (
                    <motion.div
                      key={index}
                      className="border-b border-gray-200 dark:border-gray-800 pb-4 last:border-b-0"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-start gap-2">
                        {isCorrect ? (
                          <CheckCircle2 className="h-5 w-5 text-gray-900 dark:text-white mt-1 flex-shrink-0" />
                        ) : (
                          <XCircle className="h-5 w-5 text-gray-900 dark:text-white mt-1 flex-shrink-0" />
                        )}
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{question.questionText}</p>
                          <p className="mt-1">
                            <span className="text-sm text-gray-600 dark:text-gray-400">Your answer: </span>
                            <span className="text-gray-900 dark:text-white">{userAnswer}</span>
                          </p>
                          {!isCorrect && (
                            <p className="mt-1">
                              <span className="text-sm text-gray-600 dark:text-gray-400">Correct answer: </span>
                              <span className="text-gray-900 dark:text-white">{question.correctAnswer}</span>
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-6">
            <Button
              onClick={onRestart}
              className="w-full rounded-full bg-gray-900 hover:bg-gray-800 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-gray-900 shadow-lg transition-all duration-300"
            >
              Play Again
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
