import React, { createContext, useState, useContext, ReactNode } from 'react';

type Produto = {
  id: string;
  nome: string;
  preco: string;
  descricao: string;
  imagem: any;
};

type CartContextType = {
  carrinho: Produto[];
  adicionarAoCarrinho: (produto: Produto) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [carrinho, setCarrinho] = useState<Produto[]>([]);

  const adicionarAoCarrinho = (produto: Produto) => {
    setCarrinho((prev) => [...prev, produto]);
  };

  return (
    <CartContext.Provider value={{ carrinho, adicionarAoCarrinho }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart precisa ser usado dentro do CartProvider');
  }
  return context;
};
