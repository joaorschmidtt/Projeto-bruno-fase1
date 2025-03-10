import React from 'react'
import {Link, useRouter} from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'
const welcome = () => {
   
    const navigate = useRouter()
    const replacepath = (path:any) =>  {
        navigate.replace(path)
    }
  return (
    <LinearGradient colors={['#4B0082', '#FF00FF']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}

    >
     <View style={styles.formContainer}>
        <View style={styles.logoContainer}>
            
            <AntDesign style={styles.logo} name="home" />
            <Text style={{color: '#FFF', fontSize:34}}> Sistema SuperMax</Text>
            <Text style={{color: '#FFF', fontSize:24, marginBottom: 40}}>Seja Bem vindo!</Text>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={()=>{replacepath('/login')}}><Text style={{color: '#FF00FF',fontSize:18}}>Login</Text></TouchableOpacity>
        <TouchableOpacity style={styles.registerButton} onPress={()=>{replacepath('/register')}}><Text style={{color: '#4B0082',fontSize:18}}>Registre-se</Text></TouchableOpacity>
    
    </View>   

    </LinearGradient>
  )
}

const styles = StyleSheet.create({
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
        backgroundColor: '#4B0082',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#FF00FF',
    },
    registerButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#FF00FF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#FF00FF',
    },

})

export default welcome
