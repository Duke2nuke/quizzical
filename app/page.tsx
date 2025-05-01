import Quiz from "@/components/quiz"
import { quizData } from "@/data/quiz-data"
import MinimalBackground from "@/components/minimal-background"
import Logo from "@/components/logo"

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-4 md:p-24 overflow-hidden">
      <MinimalBackground />
      <div className="w-full max-w-3xl relative z-10">
        <div className="flex justify-center mb-8">
          <Logo size="lg" />
        </div>
        <Quiz questions={quizData} />
      </div>
    </main>
  )
}
