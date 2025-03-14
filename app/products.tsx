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
      "Música de alta resolução: ouça todos os detalhes de suas músicas favoritas graças aos drivers Life Q30s de 40 mm.",
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
  {
    id: "3",
    nome: "Soundcore Life Q30",
    preco: "799,00",
    descricao:
      "Música de alta resolução: ouça todos os detalhes de suas músicas favoritas graças aos drivers Life Q30s de 40 mm. Os diafragmas de seda altamente flexíveis reproduzem graves e agudos nítidos que se estendem até 40 kHz para melhorar a clareza.",
    imagem: require("../assets/images/fone.jpg"),
  },
  {
    id: "4",
    nome: "Soundcore Life Q30",
    preco: "799,00",
    descricao:
      "Música de alta resolução: ouça todos os detalhes de suas músicas favoritas graças aos drivers Life Q30s de 40 mm. Os diafragmas de seda altamente flexíveis reproduzem graves e agudos nítidos que se estendem até 40 kHz para melhorar a clareza.",
    imagem: require("../assets/images/fone.jpg"),
  },
  {
    id: "1",
    nome: "Soundcore Life Q30",
    preco: "799,00",
    descricao:
      "Música de alta resolução: ouça todos os detalhes de suas músicas favoritas graças aos drivers Life Q30s de 40 mm. Os diafragmas de seda altamente flexíveis reproduzem graves e agudos nítidos que se estendem até 40 kHz para melhorar a clareza.",
    imagem: require("../assets/images/fone.jpg"),
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
  numColumns={2} // ou qualquer outro número de colunas
  columnWrapperStyle={styles.row}
  key={`columns-${2}`}  // Altere o número conforme necessário
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
    backgroundColor: "#212121", // Fundo escuro (preto)
    padding: 20,
  },
  row: {
    justifyContent: "space-between", // Espaçamento entre os cards
  },
  produtoCard: {
    backgroundColor: "#1c1c1c", // Fundo mais escuro para o card do produto
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#00BCD4", // Azul mais escuro nas bordas para destacar
    width: "48%", // Definir a largura do card (para 2 colunas)
  },
  imagemProduto: {
    width: 100, // Tamanho menor para a imagem
    height: 100, // Tamanho menor para a imagem
    borderRadius: 10,
    marginBottom: 10,
  },
  nomeProduto: {
    fontSize: 16, // Diminuir o tamanho do nome
    fontWeight: "bold",
    marginBottom: 5,
    color: "#00BCD4", // Azul mais escuro para o nome do produto
  },
  descricaoProduto: {
    fontSize: 12, // Diminuir o tamanho da descrição
    color: "#B0B0B0", // Cor cinza mais suave para a descrição
    marginBottom: 10,
    textAlign: "center",
  },
  precoProduto: {
    fontSize: 14, // Ajustar o tamanho do preço
    color: "#00BCD4", // Azul mais escuro para o preço
    marginBottom: 10,
  },
  botaoAdicionar: {
    backgroundColor: "#00BCD4", // Azul mais escuro para o botão
    padding: 10,
    borderRadius: 5,
  },
  textBotao: {
    color: "#212121", // Texto escuro para contraste no botão
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
  },
  containerBtnAction: {
    alignItems: "center",
    justifyContent: "center",
  },
  botaoCarrinho: {
    backgroundColor: "#1565C0", // Azul mais escuro para o botão de carrinho
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
    tintColor: "#FFF", // Ícone do carrinho branco
  },
  contador: {
    backgroundColor: "#00BCD4", // Azul mais escuro para o contador de itens no carrinho
    width: 20,
    borderRadius: 50,
    top: -5,
    borderColor: "#212121", // Cor escura para borda do contador
    borderWidth: 1,
    right: 10,
    textAlign: "center",
    color: "#212121", // Texto escuro dentro do contador
    position: "absolute",
  },
});

export default Produtos;
