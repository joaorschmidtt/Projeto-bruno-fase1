import api from "@/api";
import React, { createContext, useState, useContext, ReactNode } from "react";

type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: any;
  quantity: number;
};

type CartContextType = {
  carrinho: Product[];
  adicionarAoCarrinho: (produto: Product) => void;
  removerDoCarrinho: (produtoId: string) => void;
  limparCarrinho: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [carrinho, setCarrinho] = useState<Product[]>([]);

  const adicionarAoCarrinho = async (produto: Product) => {
    const produtoExistente = carrinho.find((item) => item._id === produto._id);
    if (produtoExistente) {
      setCarrinho((prev) =>
        prev.map((item) =>
          item._id === produto._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      await api.post(`/api/cart`, {
        userId: "67f7b02b07b493ed93addc63",
        productId: produto._id,
        quantity: produto.quantity,
      });
      return;
    } else {
      setCarrinho((prev) => [...prev, { ...produto, quantity: 1 }]);
      await api.post(`/api/cart`, {
        userId: "67f7b02b07b493ed93addc63",
        productId: produto._id,
        quantity: produto.quantity,
      });
    }
  };

  const removerDoCarrinho = (produtoId: string) => {
    setCarrinho((prev) => prev.filter((item) => item._id !== produtoId));
  };
  const limparCarrinho = () => {
    setCarrinho([]); // <-- Agora ele funciona aqui dentro, porque tem acesso ao setCarrinho!
  };

  return (
    <CartContext.Provider
      value={{
        carrinho,
        adicionarAoCarrinho,
        removerDoCarrinho,
        limparCarrinho,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart precisa ser usado dentro do CartProvider");
  }
  return context;
};
