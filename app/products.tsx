import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
import { useCart } from "@/context/cartContext";
import React, { useEffect, useState } from "react";
import api from "@/api";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

interface Product {
  _id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

const Produtos = () => {
  const { adicionarAoCarrinho, carrinho } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const navigation = useNavigation();

  const renderProduto = ({ item }: { item: Product }) => (
    <View style={styles.produtoCard}>
      <Image
        source={
          typeof item.image === "string" ? { uri: item.image } : item.image
        }
        style={styles.imagemProduto}
      />
      <Text style={styles.nomeProduto}>{item.name}</Text>
      <Text style={styles.descricaoProduto}>{item.description}</Text>
      <Text style={styles.precoProduto}>
        {item.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </Text>
      <TouchableOpacity
        style={styles.botaoAdicionar}
        onPress={() =>
          adicionarAoCarrinho({
            ...item,
            quantity: 1,
          })
        }
      >
        <Text style={styles.textBotao}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>
    </View>
  );

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await api.get("/api/product");
        setProducts(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProdutos();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProduto}
        keyExtractor={(item) => item._id}
        numColumns={2}
        columnWrapperStyle={styles.row}
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
          <TouchableOpacity onPress={() => router.push("/")}>
            <View style={styles.botaoCarrinho}>
              <Image
                source={require("../assets/images/message-circle-question.png")}
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
    backgroundColor: "#212121",
    paddingLeft: 5,
    paddingRight: 5,
  },
  row: {
    justifyContent: "space-between",
  },
  produtoCard: {
    backgroundColor: "#1c1c1c",
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#00BCD4",
  },
  imagemProduto: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  nomeProduto: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#00BCD4",
  },
  descricaoProduto: {
    fontSize: 12,
    color: "#B0B0B0",
    marginBottom: 10,
    textAlign: "center",
  },
  precoProduto: {
    fontSize: 14,
    color: "#00BCD4",
    marginBottom: 10,
  },
  botaoAdicionar: {
    backgroundColor: "#00BCD4",
    padding: 10,
    borderRadius: 5,
  },
  textBotao: {
    color: "#212121",
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    marginBottom: 20,
  },
  containerBtnAction: {
    alignItems: "center",
    justifyContent: "center",
  },
  botaoCarrinho: {
    backgroundColor: "#1565C0",
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
    tintColor: "#FFF",
  },
  contador: {
    backgroundColor: "#00BCD4",
    width: 20,
    borderRadius: 50,
    top: -5,
    borderColor: "#212121",
    borderWidth: 1,
    right: 10,
    textAlign: "center",
    color: "#212121",
    position: "absolute",
  },
});

export default Produtos;
