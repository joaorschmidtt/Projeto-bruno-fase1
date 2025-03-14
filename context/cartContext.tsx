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
  removerDoCarrinho: (produtoId: string) => void;
   limparCarrinho: () => void; 
};

const CartContext = createContext<CartContextType | undefined>(undefined);


export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [carrinho, setCarrinho] = useState<Produto[]>([]);

  const adicionarAoCarrinho = (produto: Produto) => {
    setCarrinho((prev) => [...prev, produto]);
  };

  const removerDoCarrinho = (produtoId: string) => {
    setCarrinho((prev) => prev.filter((item) => item.id !== produtoId));
  };
  const limparCarrinho = () => {
    setCarrinho([]); // <-- Agora ele funciona aqui dentro, porque tem acesso ao setCarrinho!
  };

  return (
    <CartContext.Provider value={{ carrinho, adicionarAoCarrinho, removerDoCarrinho,limparCarrinho }}>
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
