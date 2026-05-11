import { useCart } from '../context/CartContext'

export default function CartSidebar({ isOpen, onClose }) {
    const {
        cartItems,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        totalPrice
    } = useCart()

    return (
        <>
            <div
                className={`cart-overlay ${isOpen ? 'show' : ''}`}
                onClick={onClose}
            />

            <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="fw-bold">Carrinho</h3>

                    <button
                        className="btn btn-sm btn-outline-light"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                </div>

                {cartItems.length === 0 ? (
                    <p className="text-secondary">
                        Seu carrinho está vazio.
                    </p>
                ) : (
                    <>
                        <div className="d-flex flex-column gap-3">
                            {cartItems.map((item) => (
                                <div className="cart-item" key={item.id}>
                                    <img src={item.image} alt={item.title} />

                                    <div className="flex-grow-1">
                                        <h6>{item.title}</h6>

                                        <p>
                                            R$ {item.price.toFixed(2)}
                                        </p>

                                        <div className="d-flex align-items-center gap-2">
                                            <button
                                                className="btn btn-sm btn-outline-light"
                                                onClick={() =>
                                                    decreaseQuantity(item.id)
                                                }
                                            >
                                                -
                                            </button>

                                            <span>{item.quantity}</span>

                                            <button
                                                className="btn btn-sm btn-outline-light"
                                                onClick={() =>
                                                    increaseQuantity(item.id)
                                                }
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() =>
                                            removeFromCart(item.id)
                                        }
                                    >
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 pt-4 border-top border-secondary">
                            <h4>
                                Total:
                                <span className="text-info ms-2">
                                    R$ {totalPrice.toFixed(2)}
                                </span>
                            </h4>

                            <button className="btn hero-button w-100 mt-3 py-3">
                                Finalizar compra
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}