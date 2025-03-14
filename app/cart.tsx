import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useCart } from '@/context/cartContext'; // Ajusta o caminho certinho
import { router } from 'expo-router'; // Se quiser usar para voltar

export default function CartScreen() {
  const { carrinho } = useCart();

  const renderProduto = ({ item }: any) => (
    <View style={styles.produtoCard}>
      <Image
        source={typeof item.imagem === 'string' ? { uri: item.imagem } : item.imagem}
        style={styles.imagemProduto}
      />
      <Text style={styles.nomeProduto}>{item.nome}</Text>
      <Text style={styles.precoProduto}>R$ {item.preco}</Text>
    </View>
  );

  return (
    <LinearGradient
      colors={['#2fd1ed', '#bb5dff']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.btnVoltar}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.tt}>Produtos Adicionados</Text>
      </View>

      <FlatList
        data={carrinho}
        renderItem={renderProduto}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 10,
    alignItems: 'center',
  },
  btnVoltar: {
    color: 'white',
    fontSize: 16,
    backgroundColor: '#bb5dff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  tt: {
    fontSize: 20,
    backgroundColor: '#bb5dff',
    color: 'white',
    textAlign: 'center',
    padding: 10,
    borderRadius: 10,
    width: 200,
  },
  produtoCard: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  imagemProduto: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  nomeProduto: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  precoProduto: {
    fontSize: 14,
    color: '#4B0082',
  },
});
