import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useCart } from '@/context/cartContext'; 
import { router } from 'expo-router';


interface Product {
  _id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
}

export default function CartScreen() {
  const { carrinho, removerDoCarrinho } = useCart();

  const produtosAgrupados = carrinho.reduce((acc: Product[], produto) => {
    const produtoExistente = acc.find((p) => p._id === produto._id);
    if (produtoExistente) {
      produtoExistente.quantity += 1;
    } else {
      acc.push({ ...produto, quantity: 1 });
    }
    return acc;
  }, []);

  const renderProduto = ({ item }: { item: Product }) => (
    <View style={styles.produtoCard}>
      <Image
        source={typeof item.image === 'string' ? { uri: item.image } : item.image}
        style={styles.imagemProduto}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.nomeProduto}>{item.name}</Text>
        <Text style={styles.precoProduto}>R$ {item.price}</Text>
        <Text style={styles.quantidadeProduto}>Quantidade: {item.quantity}</Text>

        <TouchableOpacity
          style={styles.botaoRemover}
          onPress={() => removerDoCarrinho(item._id)}
        >
          <Text style={styles.textoRemover}>Remover</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.btnVoltar}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.tt}>Meu Carrinho</Text>
      </View>

      <FlatList
        data={produtosAgrupados}
        renderItem={renderProduto}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />

      {carrinho.length > 0 && (
        <TouchableOpacity
          style={styles.botaoFinalizar}
          onPress={() => router.push('/finalizarCompra')}
        >
          <Text style={styles.textoFinalizar}>Finalizar Compra</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121', 
  },
  header: {
    marginTop: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnVoltar: {
    fontSize: 16,
    color: '#00BCD4',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  tt: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  produtoCard: {
    backgroundColor: '#1c1c1c', 
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 12,
    flexDirection: 'row',
    padding: 12,
    borderWidth: 1,
    borderColor: '#00BCD4',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  imagemProduto: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'space-between',
  },
  nomeProduto: {
    fontSize: 16,
    fontWeight: '500',
    color: '#00BCD4', 
  },
  precoProduto: {
    fontSize: 14,
    color: '#B0B0B0', 
    marginTop: 4,
  },
  quantidadeProduto: {
    fontSize: 14,
    color: '#B0B0B0', 
    marginTop: 4,
    fontWeight: 'bold',
  },
  botaoRemover: {
    marginTop: 10,
    backgroundColor: '#E53935', 
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  textoRemover: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  botaoFinalizar: {
    backgroundColor: '#1A73E8', 
    margin: 20,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  textoFinalizar: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
