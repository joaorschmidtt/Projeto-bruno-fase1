import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';

const produtos = [
  { id: '1', nome: 'Produto 1', preco: '10.00', descricao: 'Descrição do produto 1', imagem: 'url-da-imagem' },
  { id: '2', nome: 'Produto 2', preco: '15.00', descricao: 'Descrição do produto 2', imagem: 'url-da-imagem' },
  { id: '1', nome: 'Produto 1', preco: '10.00', descricao: 'Descrição do produto 1', imagem: 'url-da-imagem' },
  { id: '2', nome: 'Produto 2', preco: '15.00', descricao: 'Descrição do produto 2', imagem: 'url-da-imagem' },
  { id: '1', nome: 'Produto 1', preco: '10.00', descricao: 'Descrição do produto 1', imagem: 'url-da-imagem' },
  { id: '2', nome: 'Produto 2', preco: '15.00', descricao: 'Descrição do produto 2', imagem: 'url-da-imagem' },
  { id: '1', nome: 'Produto 1', preco: '10.00', descricao: 'Descrição do produto 1', imagem: 'url-da-imagem' },
  { id: '2', nome: 'Produto 2', preco: '15.00', descricao: 'Descrição do produto 2', imagem: 'url-da-imagem' },
  { id: '1', nome: 'Produto 1', preco: '10.00', descricao: 'Descrição do produto 1', imagem: 'url-da-imagem' },
  { id: '2', nome: 'Produto 2', preco: '15.00', descricao: 'Descrição do produto 2', imagem: 'url-da-imagem' },
  // Adicione mais produtos aqui
];

const Produtos = () => {
  const [carrinho, setCarrinho] = useState<any[]>([]);

  const adicionarAoCarrinho = (produto: any) => {
    setCarrinho([...carrinho, produto]);
  };

  const renderProduto = ({ item }: any) => (
    <View style={styles.produtoCard}>
      <Image source={{ uri: item.imagem }} style={styles.imagemProduto} />
      <Text style={styles.nomeProduto}>{item.nome}</Text>
      <Text style={styles.precoProduto}>R$ {item.preco}</Text>
      <TouchableOpacity 
        style={styles.botaoAdicionar}
        onPress={() => adicionarAoCarrinho(item)}
      >
        <Text style={styles.textBotao}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        renderItem={renderProduto}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.carrinhoContainer}>
        <TouchableOpacity onPress={() => console.log(carrinho)}>
          <Text style={styles.botaoCarrinho}>Ver Carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  produtoCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    alignItems: 'center',
  },
  imagemProduto: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  nomeProduto: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  precoProduto: {
    fontSize: 16,
    color: '#4B0082',
    marginBottom: 10,
  },
  botaoAdicionar: {
    backgroundColor: '#4B0082',
    padding: 10,
    borderRadius: 5,
  },
  textBotao: {
    color: '#FFF',
  },
  carrinhoContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
    
  },
  botaoCarrinho: {
    backgroundColor: '#FF00FF',
    padding: 15,
    borderRadius: 50,
    color: '#FFF',
    fontSize: 18,
  },
});

export default Produtos;
