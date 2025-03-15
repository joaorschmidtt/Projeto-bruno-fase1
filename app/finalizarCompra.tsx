import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { useCart } from '@/context/cartContext';
import { LinearGradient } from 'expo-linear-gradient';

export default function FinalizarCompra() {
  const { limparCarrinho } = useCart();

  const handleFinalizar = () => {
    limparCarrinho(); 
    router.push('/products'); 
  };

  return (
    <LinearGradient
      colors={['#2c2f3f', '#1a1a1a']} 
      style={styles.container}
    >
      <View style={styles.card}>
        <Text style={styles.titulo}>Compra finalizada!</Text>
        <Text style={styles.subtitulo}>Obrigado pela sua compra! 🎉</Text>

        <TouchableOpacity style={styles.botao} onPress={handleFinalizar}>
          <Text style={styles.textoBotao}>Voltar para a Home</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#1c1c1c', 
    borderRadius: 12,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5, 
    width: '90%', 
    maxWidth: 400,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#00BCD4', 
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 18,
    marginBottom: 30,
    color: '#B0B0B0', 
    textAlign: 'center',
  },
  botao: {
    backgroundColor: '#00BCD4', 
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, 
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
