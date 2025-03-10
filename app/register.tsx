import React from 'react'
import {Link, useRouter} from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'
import { TextInput } from 'react-native-gesture-handler'
const register = () => {
   
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
            
            <MaterialCommunityIcons style={styles.logo} name="account-circle" />
            <Text style={{color: '#FFF', fontSize:34}}> Sistema SuperMax</Text>
          
        </View>
        <TextInput 
  placeholder="Nome completo*" 
  placeholderTextColor="#FFF" 
  style={styles.input} 
/>

<TextInput 
                    placeholder="E-mail" 
                    placeholderTextColor="#FFF" 
                    keyboardType="email-address"
                    style={styles.input} 
                />
           <TextInput 
                    placeholder="Senha" 
                    placeholderTextColor="#FFF" 
                    secureTextEntry={true}
                    style={styles.input} 
                />
             <TextInput 
                    placeholder="Repita a senha" 
                    placeholderTextColor="#FFF" 
                    secureTextEntry={true}
                    style={styles.input} 
                />
        <TouchableOpacity style={styles.loginButton} onPress={()=>{replacepath('/login')}}><Text style={{color: '#FF00FF',fontSize:18}}>Enviar</Text></TouchableOpacity>
       
    
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
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 10,
        paddingHorizontal: 10,
        color: '#FFF',
        marginBottom: 15,
        fontSize: 18,
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

export default register
