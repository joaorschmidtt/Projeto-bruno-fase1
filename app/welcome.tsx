import React from 'react'
import {Link, useRouter} from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'
import { Image } from 'react-native'
const welcome = () => {
   
    const navigate = useRouter()
    const replacepath = (path:any) =>  {
        navigate.replace(path)
    }
  return (
    <LinearGradient colors={['#2fd1ed', '#bb5dff']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}

    >
     <View style={styles.formContainer}>
        <View style={styles.logoContainer}>
            
        <Image
  source={require('../assets/images/logo.png')}
  style={styles.logoImagem}
  resizeMode="contain"
/>
            <Text style={{color: '#FFF', fontSize:34}}> TrendX Store</Text>
            <Text style={{color: '#FFF', fontSize:24, marginBottom: 40}}>Seja Bem vindo!</Text>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={()=>{replacepath('/login')}}><Text style={{color: '#bb5dff',fontSize:18}}>Login</Text></TouchableOpacity>
        <TouchableOpacity style={styles.registerButton} onPress={()=>{replacepath('/register')}}><Text style={{color: '#0cc0df',fontSize:18}}>Registre-se</Text></TouchableOpacity>
    
    </View>   

    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    logoImagem: {
        width: 150,    // Largura da imagem
        height: 150,   // Altura da imagem
        marginBottom: 20,  // Espaçamento abaixo, igual ao ícone anterior
      },
      
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        width: '80%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoContainer: {
        color: '#FFF',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    logo: {
        fontSize: 100,
        marginBottom: 20,
        color: '#FFF',
    },
    loginButton: {
        width: '100%',
        height: 50,
        marginBottom: 10,
        backgroundColor: '#0cc0df',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#FFF',
        borderWidth: 1,
    },
    registerButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#bb5dff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#FFF',
        
        
    },

})

export default welcome
