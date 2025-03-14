import React from "react";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const register = () => {
  const navigate = useRouter();
  const replacepath = (path: any) => {
    navigate.replace(path);
  };

  const router = useRouter();

  return (
    <LinearGradient
      colors={["#212121", "#2979FF"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.formContainer}>
        <View style={styles.logoContainer}>
          <MaterialCommunityIcons style={styles.logo} name="account-circle" />
          <Text style={{ color: "#FFF", fontSize: 34 , marginBottom:15}}>Entrar</Text>
        </View>

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

        {/* Botão com gradiente */}
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => replacepath("/products")}
        >
          <LinearGradient
            colors={["#2979FF", "#212121"]} // Gradiente no botão
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.buttonGradient}
          >
            <Text style={styles.buttonGradientText}>Entrar</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => replacepath("/welcome")}
        >
          <LinearGradient
            colors={["#2979FF", "#212121"]} // Gradiente no botão
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.buttonGradient}
          >
            <Text style={styles.buttonGradientText}>Voltar</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    width: "80%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    color: "#FFF",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  logo: {
    fontSize: 100,
    marginBottom: 20,
    color: "#FFF",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#FFF",
    borderRadius: 10,
    paddingHorizontal: 10,
    color: "#FFF",
    marginBottom: 15,
    fontSize: 18,
  },
  buttonContainer: {
    width: "100%",
    marginTop: 10,
  },
  buttonGradient: {
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginBottom: 5,
  },
  buttonGradientText: {
    color: "#bfe5ef",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default register;
