import { useState } from 'react'
import { GAMES } from '../data/games'
import GameCard from '../components/GameCard'

export default function ProductsPage() {
    const [search, setSearch] = useState('')

    const filteredGames = GAMES.filter((game) =>
        game.title.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
                <h1 className="text-light fw-bold">Catálogo</h1>

                <input
                    type="text"
                    className="form-control bg-dark text-light border-secondary"
                    placeholder="Buscar jogo..."
                    style={{ maxWidth: '300px' }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="row g-4">
                {filteredGames.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </div>
    )
}