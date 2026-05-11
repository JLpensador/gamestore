import { useState } from 'react'
import { QUIZ_QUESTIONS } from '../data/quiz'
import { GAMES } from '../data/games'

export default function QuizPage() {
    const [step, setStep] = useState(0)
    const [result, setResult] = useState(null)

    const question = QUIZ_QUESTIONS[step]

    function handleAnswer(value) {
        const game = GAMES.find((g) => g.mood.includes(value))

        if (step < QUIZ_QUESTIONS.length - 1) {
            setStep(step + 1)
        } else {
            setResult(game || GAMES[0])
        }
    }

    if (result) {
        return (
            <div className="text-center py-5">
                <h1 className="text-light fw-bold mb-4">
                    Seu jogo ideal é:
                </h1>

                <div className="card bg-dark border-primary mx-auto" style={{ maxWidth: '500px' }}>
                    <img src={result.image} className="card-img-top" alt={result.title} />

                    <div className="card-body">
                        <h3 className="text-light">{result.title}</h3>
                        <p className="text-secondary">{result.description}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="quiz-container mx-auto" style={{ maxWidth: '700px' }}>
            <h1 className="text-light fw-bold mb-5 text-center">
                Quiz Gamer
            </h1>

            <div className="card bg-dark border-secondary p-4">
                <h3 className="text-light mb-4">{question.question}</h3>

                <div className="d-flex flex-column gap-3">
                    {question.options.map((option) => (
                        <button
                            key={option.value}
                            className="btn btn-outline-light text-start"
                            onClick={() => handleAnswer(option.value)}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}