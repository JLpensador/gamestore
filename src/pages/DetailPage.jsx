import { useParams } from 'react-router-dom'

import { GAMES } from '../data/games'

import { useCart } from '../context/CartContext'

export default function DetailPage() {
    const { id } = useParams()

    const { addToCart } = useCart()

    const game = GAMES.find(
        (g) => g.id === Number(id)
    )

    if (!game) {
        return (
            <h2 className="text-light">
                Jogo não encontrado
            </h2>
        )
    }

    return (
        <div className="row g-5">
            <div className="col-lg-7">
                <img
                    src={game.image}
                    alt={game.title}
                    className="img-fluid rounded-4 border border-secondary"
                />
            </div>

            <div className="col-lg-5">
                <span className="badge bg-primary mb-3">
                    {game.genre}
                </span>

                <h1 className="fw-bold mb-3">
                    {game.title}
                </h1>

                <p className="text-secondary fs-5">
                    {game.description}
                </p>

                <h2 className="text-info fw-bold my-4">
                    R$ {game.price.toFixed(2)}
                </h2>

                <button
                    className="btn hero-button btn-lg w-100"
                    onClick={() => addToCart(game)}
                >
                    Adicionar ao Carrinho
                </button>
            </div>
        </div>
    )
}