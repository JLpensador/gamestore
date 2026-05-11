import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([])

    function addToCart(game) {
        setCartItems((prev) => {
            const existingItem = prev.find(
                (item) => item.id === game.id
            )

            if (existingItem) {
                return prev.map((item) =>
                    item.id === game.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1
                        }
                        : item
                )
            }

            return [
                ...prev,
                {
                    ...game,
                    quantity: 1
                }
            ]
        })
    }

    function removeFromCart(id) {
        setCartItems((prev) =>
            prev.filter((item) => item.id !== id)
        )
    }

    function increaseQuantity(id) {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }
                    : item
            )
        )
    }

    function decreaseQuantity(id) {
        setCartItems((prev) =>
            prev
                .map((item) =>
                    item.id === id
                        ? {
                            ...item,
                            quantity: item.quantity - 1
                        }
                        : item
                )
                .filter((item) => item.quantity > 0)
        )
    }

    const totalPrice = cartItems.reduce(
        (acc, item) =>
            acc + item.price * item.quantity,
        0
    )

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity,
                totalPrice
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
    return useContext(CartContext)
}