import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';

const produtos = [
  { id: '1', nome: 'Soundcore Life Q30', preco: '799,00', descricao: 'Música de alta resolução: ouça todos os detalhes de suas músicas favoritas graças aos drivers Life Q30s de 40 mm. Os diafragmas de seda altamente flexíveis reproduzem graves e agudos nítidos que se estendem até 40 kHz para melhorar a clareza.', imagem: require('../assets/images/fone.jpg') },
  { id: '2', nome: 'Beats studio 3', preco: '1800,00', descricao: 'O fone de ouvido Beats Studio3 Wireless oferece uma experiência sonora de alta qualidade com o Pure ANC (Puro cancelamento ativo de ruído). A tecnologia Pure ANC da Beats bloqueia ativamente os ruídos externos e calibra o áudio em tempo real para preservar a nitidez, o alcance e toda a emoção do seu som.', imagem: require('../assets/images/fone2.webp')  },
  { id: '3', nome: 'Produto 3', preco: '10.00', descricao: 'Descrição do produto 3', imagem: 'url-da-imagem' },
  { id: '4', nome: 'Produto 4', preco: '15.00', descricao: 'Descrição do produto 4', imagem: 'url-da-imagem' },
  { id: '5', nome: 'Produto 5', preco: '10.00', descricao: 'Descrição do produto 5', imagem: 'url-da-imagem' },
  { id: '6', nome: 'Produto 6', preco: '15.00', descricao: 'Descrição do produto 6', imagem: 'url-da-imagem' },
  { id: '7', nome: 'Produto 7', preco: '10.00', descricao: 'Descrição do produto 7', imagem: 'url-da-imagem' },
  { id: '8', nome: 'Produto 8', preco: '15.00', descricao: 'Descrição do produto 8', imagem: 'url-da-imagem' },
  { id: '9', nome: 'Produto 9', preco: '10.00', descricao: 'Descrição do produto 9', imagem: 'url-da-imagem' },
  { id: '10', nome: 'Produto 10', preco: '15.00', descricao: 'Descrição do produto 10', imagem: 'url-da-imagem' },
  // Adicione mais produtos aqui
];

const Produtos = () => {
  const [carrinho, setCarrinho] = useState<any[]>([]);

  const adicionarAoCarrinho = (produto: any) => {
    setCarrinho([...carrinho, produto]);
  };

  const renderProduto = ({ item }: any) => (
    <View style={styles.produtoCard}>
      <Image
        source={typeof item.imagem === 'string' ? { uri: item.imagem } : item.imagem} // Verifica se a imagem é uma URL ou require
        style={styles.imagemProduto}
      />
      <Text style={styles.nomeProduto}>{item.nome}</Text>
      <Text style={styles.descricaoProduto}>{item.descricao}</Text> {/* Aqui estamos exibindo a descrição */}

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
    backgroundColor: '#E8D7FF',
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
  descricaoProduto: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10, // Ajuste a margem conforme necessário
    textAlign: 'center', // Alinha o texto no centro, mas pode ajustar conforme preferir
  },
  
  precoProduto: {
    fontSize: 16,
    color: '#4B0082',
    marginBottom: 10,
  },
  botaoAdicionar: {
    backgroundColor: '#bb5dff',
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
    backgroundColor: '#8E24AA',
    padding: 15,
    borderRadius: 50,
    color: '#FFF',
    fontSize: 18,
  },
});

export default Produtos;
