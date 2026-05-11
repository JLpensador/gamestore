import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

import { useCart } from '../context/CartContext'

import CartSidebar from './CartSidebar'

export default function Navbar() {
    const location = useLocation()

    const [cartOpen, setCartOpen] =
        useState(false)

    const { cartItems } = useCart()

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
                <div className="container">
                    <Link
                        className="navbar-brand"
                        to="/"
                    >
                        <i className="bi bi-controller me-2 text-primary"></i>

                        GameStore
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarNav"
                    >
                        <ul className="navbar-nav ms-auto align-items-lg-center gap-2">
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${location.pathname === '/'
                                        ? 'active'
                                        : ''
                                        }`}
                                    to="/"
                                >
                                    Início
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${location.pathname ===
                                        '/games'
                                        ? 'active'
                                        : ''
                                        }`}
                                    to="/games"
                                >
                                    Jogos
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${location.pathname ===
                                        '/quiz'
                                        ? 'active'
                                        : ''
                                        }`}
                                    to="/quiz"
                                >
                                    Quiz
                                </Link>
                            </li>

                            <li className="nav-item">
                                <button
                                    className="btn btn-outline-light position-relative"
                                    onClick={() =>
                                        setCartOpen(true)
                                    }
                                >
                                    <i className="bi bi-cart3"></i>

                                    {cartItems.length > 0 && (
                                        <span className="cart-count">
                                            {cartItems.length}
                                        </span>
                                    )}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <CartSidebar
                isOpen={cartOpen}
                onClose={() =>
                    setCartOpen(false)
                }
            />
        </>
    )
}