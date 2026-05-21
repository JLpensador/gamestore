import { useState } from 'react'
import { QUIZ_QUESTIONS } from '../data/quiz'
import { GAMES } from '../data/games'

export default function QuizPage() {
    const [step, setStep] = useState(0)
    const [result, setResult] = useState(null)
    const [answers, setAnswers] = useState({})

    const question = QUIZ_QUESTIONS[step]

    function handleAnswer(types) {
        const updatedAnswers = { ...answers }

        // Soma os pontos das respostas
        for (const key in types) {
            updatedAnswers[key] =
                (updatedAnswers[key] || 0) + types[key]
        }

        setAnswers(updatedAnswers)

        // Próxima pergunta
        if (step < QUIZ_QUESTIONS.length - 1) {
            setStep(step + 1)
        } else {
            const scoredGames = GAMES.map((game) => {
                let score = 0

                game.mood.forEach((mood) => {
                    if (updatedAnswers[mood]) {
                        score += updatedAnswers[mood]
                    }
                })

                return {
                    ...game,
                    score
                }
            })

            const bestGame = scoredGames.sort(
                (a, b) => b.score - a.score
            )[0]

            setResult(bestGame)
        }
    }

    // Tela de resultado
    if (result) {
        return (
            <div className="text-center py-5">
                <h1 className="text-light fw-bold mb-4">
                    Seu jogo ideal é:
                </h1>

                <div
                    className="card bg-dark border-primary mx-auto"
                    style={{ maxWidth: '500px' }}
                >
                    <img
                        src={result.images?.[0]}
                        className="card-img-top"
                        alt={result.title}
                    />

                    <div className="card-body">
                        <h3 className="text-light">
                            {result.title}
                        </h3>

                        <p className="text-secondary">
                            {result.smallDescription}
                        </p>

                        <div className="d-flex flex-wrap gap-2 justify-content-center mt-3">
                            {result.mood.map((mood) => (
                                <span
                                    key={mood}
                                    className="badge bg-primary"
                                >
                                    {mood}
                                </span>
                            ))}
                        </div>
                        <button
                            className="btn btn-primary mt-4 w-100"
                            onClick={() => {
                                setStep(0)
                                setAnswers({})
                                setResult(null)
                            }}
                        >
                            Refazer Quiz
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    // Quiz
    return (
        <div
            className="quiz-container mx-auto"
            style={{ maxWidth: '700px' }}
        >
            <h1 className="text-light fw-bold mb-3 text-center">
                Quiz Gamer
            </h1>

            <p className="text-secondary text-center mb-4">
                Pergunta {step + 1} de {QUIZ_QUESTIONS.length}
            </p>

            <div className="card bg-dark border-secondary p-4">
                <h3 className="text-light mb-4">
                    {question.question}
                </h3>

                <div className="d-flex flex-column gap-3">
                    {question.options.map((option, index) => (
                        <button
                            key={index}
                            className="btn btn-outline-light text-start"
                            onClick={() =>
                                handleAnswer(option.types)
                            }
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}