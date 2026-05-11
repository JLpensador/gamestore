import StarRating from './StarRating'
import { Link } from 'react-router-dom'

export default function GameCard({ game }) {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card bg-dark border-secondary h-100 shadow game-card">
                <img
                    src={game.image}
                    className="card-img-top"
                    alt={game.title}
                />

                <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="badge bg-primary">{game.genre}</span>
                        <StarRating rating={game.rating} />
                    </div>

                    <h5 className="card-title text-light">{game.title}</h5>

                    <p className="card-text text-secondary flex-grow-1">
                        {game.description}
                    </p>

                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <strong className="text-info fs-5">
                            R$ {game.price.toFixed(2)}
                        </strong>

                        <Link
                            to={`/game/${game.id}`}
                            className="btn btn-outline-primary"
                        >
                            Ver Jogo
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}