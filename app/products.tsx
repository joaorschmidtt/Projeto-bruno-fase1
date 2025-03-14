import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
import { useCart } from '@/context/cartContext';
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from "react-native";

const produtos = [
  {
    id: "1",
    nome: "Soundcore Life Q30",
    preco: "799,00",
    descricao:
      "Música de alta resolução: ouça todos os detalhes de suas músicas favoritas graças aos drivers Life Q30s de 40 mm. Os diafragmas de seda altamente flexíveis reproduzem graves e agudos nítidos que se estendem até 40 kHz para melhorar a clareza.",
    imagem: require("../assets/images/fone.jpg"),
  },
  {
    id: "2",
    nome: "Beats studio 3",
    preco: "1800,00",
    descricao:
      "O fone de ouvido Beats Studio3 Wireless oferece uma experiência sonora de alta qualidade com o Pure ANC (Puro cancelamento ativo de ruído).",
    imagem: require("../assets/images/fone2.webp"),
  },
  // Produtos de exemplo...
];

 const Produtos = () => {
  const { adicionarAoCarrinho, carrinho } = useCart(); // ✅ Usando context aqui
  const navigation = useNavigation();

  const renderProduto = ({ item }: any) => (
    <View style={styles.produtoCard}>
      <Image
        source={
          typeof item.imagem === "string" ? { uri: item.imagem } : item.imagem
        }
        style={styles.imagemProduto}
      />
      <Text style={styles.nomeProduto}>{item.nome}</Text>
      <Text style={styles.descricaoProduto}>{item.descricao}</Text>
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
      <View style={styles.containerButtons}>
        <View style={styles.containerBtnAction}>
          <TouchableOpacity onPress={() => router.push("/login")}>
            <View style={styles.botaoCarrinho}>
              <Image
                source={require("../assets/images/goback.png")}
                style={styles.imgCarrinho}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.containerBtnAction}>
          <TouchableOpacity onPress={() => router.push("/cart")}>
            <View style={styles.botaoCarrinho}>
              <Image
                source={require("../assets/images/carrinho.png")}
                style={styles.imgCarrinho}
              />
              {carrinho.length > 0 && (
                <Text style={styles.contador}>{carrinho.length}</Text>
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
  },
  produtoCard: {
    backgroundColor: "#E8D7FF",
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    alignItems: "center",
  },
  imagemProduto: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  nomeProduto: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  descricaoProduto: {
    fontSize: 14,
    color: "#777",
    marginBottom: 10,
    textAlign: "center",
  },
  precoProduto: {
    fontSize: 16,
    color: "#4B0082",
    marginBottom: 10,
  },
  botaoAdicionar: {
    backgroundColor: "#bb5dff",
    padding: 10,
    borderRadius: 5,
  },
  textBotao: {
    color: "#FFF",
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerBtnAction: {
    alignItems: "center",
    justifyContent: "center",
  },
  botaoCarrinho: {
    backgroundColor: "#bb5dff",
    padding: 15,
    borderRadius: 50,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  imgCarrinho: {
    width: 20,
    height: 20,
  },
  contador: {
    backgroundColor: "#bb5dff",
    width: 20,
    borderRadius: 50,
    top: -5,
    borderColor: "#FFF",
    borderWidth: 1,
    right: 10,
    textAlign: "center",
    color: "#FFF",
    position: "absolute",
  },
});

export default Produtos;
