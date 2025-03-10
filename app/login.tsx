import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // garante que preencha a tela toda
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF', // evita a tela preta
  },
  text: {
    fontSize: 24,
    color: '#333',
  },
})

export default Login
