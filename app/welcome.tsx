import React from 'react';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'; // só se precisar de loading enquanto carrega a fonte

const Welcome = () => {
  const navigate = useRouter();

  // Carregando fontes
  const [fontsLoaded] = useFonts({
    'RobotoMono-SemiBold': require('../assets/fonts/static/RobotoMono-SemiBold.ttf'),
    'RobotoMono-Medium': require('../assets/fonts/static/RobotoMono-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />; // ou um loader, se preferir
  }

  const replacepath = (path: any) => {
    navigate.replace(path);
  };

  return (
    <LinearGradient
      colors={['#2fd1ed', '#bb5dff']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.formContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/logo2.png')}
            style={styles.logoImagem}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Bem-vindo à TrendX Store</Text>
          <Text style={styles.subtitle}>Os melhores gadgets e acessórios importados em um só lugar!</Text>
        </View>

        {/* Botão de Login */}
        <TouchableOpacity onPress={() => replacepath('/login')} style={styles.buttonContainer}>
          <LinearGradient
            colors={['#2fd1ed', '#bb5dff']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.buttonGradient}
          >
            <Text style={styles.buttonGradientText}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Botão Registre-se */}
        <TouchableOpacity onPress={() => replacepath('/register')} style={styles.buttonRegister}>
          <Text style={styles.textRegister}>Registre-se</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  logoImagem: {
    width: 250,
    height: 250,
    marginBottom: 50,
  },
  textContainer: {
    marginBottom: 50,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold', // Fonte aplicada aqui!
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular', // E aqui também!
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 10,
  },
  buttonGradient: {
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  buttonGradientText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonRegister: {
    backgroundColor: 'transparent',
    padding: 10,
  },
  textRegister: {
    color: 'white',
    fontSize: 15,
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default Welcome;
