import { createContext, useContext, useState, useEffect } from "react";

const AddtocardContext = createContext();

export const AddtocardProvider = ({ children }) => {
  const [addtocard, setAddtocard] = useState(() => {
    const saved = localStorage.getItem("addtocard");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("addtocard", JSON.stringify(addtocard));
  }, [addtocard]);

  const toggleAddtocard = (product) => {
    setAddtocard((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromAddtocard = (productId) => {
    setAddtocard((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setAddtocard((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(quantity, 1) }
          : item
      )
    );
  };

  return (
    <AddtocardContext.Provider
      value={{ addtocard, toggleAddtocard, removeFromAddtocard, updateQuantity }}
    >
      {children}
    </AddtocardContext.Provider>
  );
};

export const useAddtocard = () => useContext(AddtocardContext);
