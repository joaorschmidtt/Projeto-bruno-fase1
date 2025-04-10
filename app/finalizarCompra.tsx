import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { useCart } from '@/context/cartContext';
import api from '@/api';
import QRCode from 'react-native-qrcode-svg';

const FinalizarCompra = () => {
  const { carrinho, limparCarrinho } = useCart();
  const [pagamento, setPagamento] = useState('Pix');

  const [dadosPix, setDadosPix] = useState({ chave: '' });
  const [dadosCartao, setDadosCartao] = useState({
    numero: '',
    nome: '',
    validade: '',
    cvv: '',
  });
  const [dadosBoleto, setDadosBoleto] = useState({ cpf: '' });

  const totalCompra = carrinho
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  const finalizar = async () => {
    try {
      const pedido = {
        userId: '123', // Substituir pelo ID do usuário logado
        products: carrinho.map((item) => ({ name: item.name, price: item.price })),
        total: parseFloat(totalCompra),
        pagamento,
        detalhesPagamento:
          pagamento === 'Pix'
            ? dadosPix
            : pagamento === 'Cartão de Crédito'
            ? dadosCartao
            : dadosBoleto,
      };
      await api.post('/api/purchase', pedido);
      alert('Compra finalizada com sucesso!');
      limparCarrinho();
    } catch (err) {
      alert('Erro ao finalizar compra');
    }
  };

  const renderFormularioPagamento = () => {
    switch (pagamento) {
      case 'Pix':
        return (
          <View style={styles.form}>
            <Text style={styles.label}>Chave Pix:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua chave Pix"
              placeholderTextColor="#999"
              value={dadosPix.chave}
              onChangeText={(text) => setDadosPix({ chave: text })}
            />
            {dadosPix.chave.length > 5 && (
              <View style={styles.qrContainer}>
                <Text style={styles.label}>QR Code:</Text>
                <QRCode
                  value={`Pagamento de R$${totalCompra} para chave: ${dadosPix.chave}`}
                  size={200}
                  color="#00BCD4"
                  backgroundColor="#fff"
                />
              </View>
            )}
          </View>
        );
      case 'Cartão de Crédito':
        return (
          <View style={styles.form}>
            <Text style={styles.label}>Número do Cartão:</Text>
            <TextInput
              style={styles.input}
              placeholder="0000 0000 0000 0000"
              keyboardType="numeric"
              value={dadosCartao.numero}
              onChangeText={(text) =>
                setDadosCartao({ ...dadosCartao, numero: text })
              }
            />
            <Text style={styles.label}>Nome no Cartão:</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome completo"
              value={dadosCartao.nome}
              onChangeText={(text) =>
                setDadosCartao({ ...dadosCartao, nome: text })
              }
            />
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.label}>Validade:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="MM/AA"
                  value={dadosCartao.validade}
                  onChangeText={(text) =>
                    setDadosCartao({ ...dadosCartao, validade: text })
                  }
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.label}>CVV:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="123"
                  keyboardType="numeric"
                  value={dadosCartao.cvv}
                  onChangeText={(text) =>
                    setDadosCartao({ ...dadosCartao, cvv: text })
                  }
                />
              </View>
            </View>
          </View>
        );
      case 'Dinheiro':
        return (
          <Text style={styles.label}>Você pagará em dinheiro na entrega.</Text>
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Resumo do Pedido</Text>
      {carrinho.map((item) => (
        <Text key={item._id} style={styles.itemTexto}>
          {item.name} x{item.quantity}
        </Text>
      ))}
      <Text style={styles.total}>Total: R${totalCompra}</Text>

      <Text style={styles.titulo}>Forma de Pagamento</Text>
      <View style={styles.pagamentoContainer}>
        {['Pix', 'Cartão de Crédito', 'Dinheiro'].map((tipo) => (
          <TouchableOpacity
            key={tipo}
            style={[
              styles.botaoPagamento,
              pagamento === tipo && styles.botaoSelecionado,
            ]}
            onPress={() => setPagamento(tipo)}
          >
            <Text
              style={[
                styles.textoPagamento,
                pagamento === tipo && styles.textoSelecionado,
              ]}
            >
              {tipo}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {renderFormularioPagamento()}

      <Button title="Finalizar Compra" onPress={finalizar} color="#00BCD4" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#212121', flexGrow: 1 },
  titulo: { fontSize: 18, color: '#00BCD4', marginTop: 20, marginBottom: 10 },
  total: { fontSize: 16, color: '#fff', marginVertical: 10 },
  itemTexto: { color: '#fff' },
  pagamentoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  botaoPagamento: {
    borderColor: '#00BCD4',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 5,
  },
  botaoSelecionado: {
    backgroundColor: '#00BCD4',
  },
  textoPagamento: {
    color: '#fff',
  },
  textoSelecionado: {
    color: '#212121',
    fontWeight: 'bold',
  },
  form: {
    marginBottom: 20,
  },
  label: {
    color: '#00BCD4',
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#333',
    borderRadius: 5,
    padding: 10,
    color: '#fff',
  },
  qrContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
});

export default FinalizarCompra;
