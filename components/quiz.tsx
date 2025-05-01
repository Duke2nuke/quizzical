"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Question from "@/components/question"
import ProgressTracker from "@/components/progress-tracker"
import Results from "@/components/results"
import RankTracker from "@/components/rank-tracker"
import CharacterReaction from "@/components/character-reaction"
import ConfettiEffect from "@/components/confetti-effect"
import AnswerAnimation from "@/components/answer-animation"
import { motion } from "framer-motion"
import type { QuestionType } from "@/types/quiz-types"

interface QuizProps {
  questions: QuestionType[]
}

export default function Quiz({ questions }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [userAnswers, setUserAnswers] = useState<string[]>([])
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [currentRank, setCurrentRank] = useState("Novice")
  const [answerCorrect, setAnswerCorrect] = useState<boolean | null>(null)
  const [timeSpent, setTimeSpent] = useState(0)
  const [startTime, setStartTime] = useState(Date.now())
  const [showAnswerAnimation, setShowAnswerAnimation] = useState(false)

  const currentQuestion = questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === questions.length - 1

  useEffect(() => {
    // Reset timer when moving to a new question
    if (!showFeedback) {
      setStartTime(Date.now())
    }
  }, [currentQuestionIndex, showFeedback])

  useEffect(() => {
    // Update rank based on score
    const percentage = (score / Math.max(1, currentQuestionIndex)) * 100

    if (percentage >= 90) setCurrentRank("Master")
    else if (percentage >= 80) setCurrentRank("Expert")
    else if (percentage >= 70) setCurrentRank("Advanced")
    else if (percentage >= 60) setCurrentRank("Intermediate")
    else if (percentage >= 40) setCurrentRank("Beginner")
    else setCurrentRank("Novice")
  }, [score, currentQuestionIndex])

  const handleOptionSelect = (option: string) => {
    if (!showFeedback) {
      setSelectedOption(option)
    }
  }

  const handleNextQuestion = () => {
    if (!selectedOption) return

    if (!showFeedback) {
      // Calculate time spent on this question
      const questionTime = Math.floor((Date.now() - startTime) / 1000)
      setTimeSpent(timeSpent + questionTime)

      // Check if answer is correct and update score
      const isCorrect = selectedOption === currentQuestion.correctAnswer
      setAnswerCorrect(isCorrect)

      if (isCorrect) {
        setScore(score + 1)
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 2000)
      }

      // Show feedback and answer animation
      setShowFeedback(true)
      setShowAnswerAnimation(true)
      setTimeout(() => setShowAnswerAnimation(false), 2000)

      // Store user's answer
      const newUserAnswers = [...userAnswers]
      newUserAnswers[currentQuestionIndex] = selectedOption
      setUserAnswers(newUserAnswers)

      return
    }

    // Move to next question or complete quiz
    if (isLastQuestion) {
      setQuizCompleted(true)
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedOption(null)
      setShowFeedback(false)
      setAnswerCorrect(null)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestionIndex(0)
    setSelectedOption(null)
    setShowFeedback(false)
    setScore(0)
    setUserAnswers([])
    setQuizCompleted(false)
    setTimeSpent(0)
    setStartTime(Date.now())
    setCurrentRank("Novice")
    setAnswerCorrect(null)
  }

  if (quizCompleted) {
    return (
      <Results
        score={score}
        totalQuestions={questions.length}
        onRestart={restartQuiz}
        questions={questions}
        userAnswers={userAnswers}
        finalRank={currentRank}
        timeSpent={timeSpent}
      />
    )
  }

  return (
    <motion.div className="relative">
      {showConfetti && <ConfettiEffect />}
      {answerCorrect !== null && <AnswerAnimation isCorrect={answerCorrect} isVisible={showAnswerAnimation} />}

      <div className="mb-4 flex justify-between items-center">
        <RankTracker rank={currentRank} score={score} total={currentQuestionIndex} />
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Card className="w-full overflow-visible rounded-xl border backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 shadow-xl">
          <CardContent className="pt-6">
            <ProgressTracker
              currentQuestion={currentQuestionIndex + 1}
              totalQuestions={questions.length}
              score={score}
            />

            <Question
              question={currentQuestion}
              selectedOption={selectedOption}
              showFeedback={showFeedback}
              onOptionSelect={handleOptionSelect}
            />

            {showFeedback && (
              <div className="relative h-24 my-4">
                <CharacterReaction isCorrect={answerCorrect || false} />
              </div>
            )}

            <div className="mt-6 flex justify-end">
              <Button
                onClick={handleNextQuestion}
                disabled={!selectedOption}
                size="lg"
                className="rounded-full px-8 bg-gray-900 hover:bg-gray-800 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-gray-900 shadow-lg transition-all duration-300"
              >
                {showFeedback ? (isLastQuestion ? "See Results" : "Next Question") : "Check Answer"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
