import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { GAMES } from '../data/games'

import { useCart } from '../context/CartContext'

export default function DetailPage() {
    const { id } = useParams()

    const { addToCart } = useCart()

    const game = GAMES.find(
        (g) => g.id === Number(id)
    )

    const galleryImages =
        game.images || [game.image]

    const [selectedImage, setSelectedImage] =
        useState(galleryImages[0])

    const [selectedPlatform, setSelectedPlatform] =
        useState('PC')

    if (!game) {
        return (
            <h2 className="text-light">
                Jogo não encontrado
            </h2>
        )
    }

    return (
        <div className="game-detail-page">
            {/* BACKGROUND */}
            <div
                className="detail-background"
                style={{
                    backgroundImage: `url(${game.image})`
                }}
            />

            <div className="detail-overlay"></div>

            <div className="container py-5 position-relative">
                {/* BANNER */}
                <div className="banner-wrapper mb-5">
                    <img
                        src={selectedImage}
                        alt={game.title}
                        className="banner-image"
                    />

                    <div className="banner-shadow"></div>
                </div>

                <div className="banner-thumbnails">
                    {galleryImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt=""
                            className={`banner-thumb ${selectedImage === image
                                ? 'active'
                                : ''
                                }`}
                            onClick={() =>
                                setSelectedImage(image)
                            }
                        />
                    ))}
                </div>

                {/* CONTENT */}
                <div className="detail-content">
                    <span className="detail-genre">
                        {game.genre}
                    </span>

                    <h1 className="detail-title">
                        {game.title}
                    </h1>

                    {/* RATING */}
                    <div className="detail-rating mb-4">
                        <div className="stars">
                            ★★★★★
                        </div>

                        <span>
                            {game.rating} / 10
                        </span>
                    </div>

                    {/* PRICE */}
                    <h2 className="detail-price">
                        R$ {game.price.toFixed(2)}
                    </h2>

                    {/* PLATFORM */}
                    <div className="mt-4">
                        <p className="detail-label">
                            Selecione a Plataforma
                        </p>

                        <div className="d-flex gap-3 flex-wrap">
                            {[
                                'PC',
                                'PS5',
                                'XBOX'
                            ].map((platform) => (
                                <button
                                    key={platform}
                                    className={`platform-btn ${selectedPlatform ===
                                        platform
                                        ? 'active'
                                        : ''
                                        }`}
                                    onClick={() =>
                                        setSelectedPlatform(
                                            platform
                                        )
                                    }
                                >
                                    {platform}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* BUTTON */}
                    <button
                        className="btn detail-cart-button mt-4"
                        onClick={() => addToCart(game)}
                    >
                        <i className="bi bi-bag-plus me-2"></i>

                        Adicionar ao Carrinho
                    </button>

                    {/* ABOUT */}
                    <div className="detail-about mt-5">
                        <h3>
                            <i className="bi bi-shield-check me-2"></i>

                            Sobre o Jogo
                        </h3>

                        <p>
                            {game.description}
                        </p>
                    </div>

                    {/* INFO */}
                    <div className="detail-info-grid mt-5">
                        <div className="detail-info-card">
                            <span>Classificação</span>

                            <strong>{game.ageRating}</strong>
                        </div>

                        <div className="detail-info-card">
                            <span>Armazenamento</span>

                            <strong>{game.storage}</strong>
                        </div>

                        <div className="detail-info-card">
                            <span>Modo</span>

                            <strong>{game.gameMode}</strong>
                        </div>
                    </div>

                    {/* FEATURES */}
                    <div className="mt-5">
                        <h3 className="fw-bold mb-4">
                            Principais Características
                        </h3>

                        <ul className="detail-features">
                            {game.features.map((feature, index) => (
                                <li key={index}>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* REVIEWS */}
                    <div className="review-box mt-5">
                        <div className="review-score">
                            <h1> {game.rating}</h1>

                            <span>★★★★★</span>

                            <p>2,451 reviews</p>
                        </div>

                        <div className="review-bars">
                            {[92, 6, 1, 0, 1].map(
                                (value, index) => (
                                    <div
                                        className="review-line"
                                        key={index}
                                    >
                                        <span>
                                            {5 - index}
                                        </span>

                                        <div className="review-progress">
                                            <div
                                                style={{
                                                    width: `${value}%`
                                                }}
                                            />
                                        </div>

                                        <span>{value}%</span>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}