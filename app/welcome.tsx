import React from 'react';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'; 

const Welcome = () => {
  const navigate = useRouter();

  
  const [fontsLoaded] = useFonts({
    'RobotoMono-SemiBold': require('../assets/fonts/static/RobotoMono-SemiBold.ttf'),
    'RobotoMono-Medium': require('../assets/fonts/static/RobotoMono-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />; 
  }

  const replacepath = (path: any) => {
    navigate.replace(path);
  };

  return (
    <LinearGradient
      colors={['#212121','#2979FF']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.formContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/logoAzulPreto.png')}
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
            colors={['#2979FF','#212121']}
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
    width: 350,
    height: 300,
    marginBottom: 30,
  },
  textContainer: {
    marginBottom: 50,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    color: '#bfe5ef',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  subtitle: {
    color: '#bfe5ef',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular', 
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
    color: '#bfe5ef',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonRegister: {
    backgroundColor: 'transparent',
    padding: 10,
  },
  textRegister: {
    color: '#bfe5ef',
    fontSize: 15,
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default Welcome;
