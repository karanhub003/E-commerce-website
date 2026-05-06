import React, {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState(() => {

  const storedCart =
    localStorage.getItem("cart");

  // if nothing exists
  if (
    !storedCart ||
    storedCart === "undefined"
  ) {
    return [];
  }

  // otherwise convert string -> array
  return JSON.parse(storedCart);
});

  // save cart in localStorage
  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

  }, [cart]);

  // ADD PRODUCT
  const addToCart = (product) => {

    setCart((prevCart) => {

      const alreadyExists =
        prevCart.find(
          (item) => item.id === product.id
        );

      if (alreadyExists) {

        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          quantity: 1
        }
      ];
    });
  };

  // REMOVE PRODUCT
  const removeFromCart = (id) => {

    setCart((prevCart) =>
      prevCart.filter(
        (item) => item.id !== id
      )
    );
  };

  // INCREASE
  const increaseQuantity = (id) => {

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );
  };

  // DECREASE
  const decreaseQuantity = (id) => {

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1
            }
          : item
      )
    );
  };
  const totalPrice = cart.reduce(
  (total, item) =>
    total + item.price * item.quantity,
  0
);

  // RETURN PROVIDER
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () =>
  useContext(CartContext);