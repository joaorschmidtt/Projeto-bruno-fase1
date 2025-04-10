import React, { useState } from "react";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import api from "@/api";

const Login = () => {
  const navigate = useRouter();
  const replacepath = (path: any) => {
    navigate.replace(path);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isValidEmail = (email: string) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    setError("");

    if (!email || !password) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Por favor, insira um e-mail válido.");
      return;
    }

    if (password.length < 6) {
      setError("A senha deve ter no mínimo 6 caracteres.");
      return;
    }

    try {
      const response = await api.post("/api/login", {
        email,
        password,
      });

      if (response.status === 200) {
        replacepath("/products");
      } else {
        setError("E-mail ou senha incorretos.");
      }
    } catch (error) {
      console.log(error);
      setError("Erro ao realizar login. Tente novamente.");
    }
  };

  function isFormValid() {
    return email.trim() !== "" && password.trim() !== "" && isValidEmail(email) && password.length >= 6;
  }

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
          <Text style={{ color: "#FFF", fontSize: 34, marginBottom: 15 }}>
            Entrar
          </Text>
        </View>

        <TextInput
          placeholder="E-mail"
          placeholderTextColor="#FFF"
          keyboardType="email-address"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#FFF"
          secureTextEntry={true}
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        {/* Mensagem de erro */}
        {error !== "" && <Text style={styles.errorText}>{error}</Text>}

        {/* Botão de entrar */}
        <TouchableOpacity
          style={[styles.buttonContainer, !isFormValid() && { opacity: 0.5 }]}
          onPress={handleLogin}
          disabled={!isFormValid()}
        >
          <LinearGradient
            colors={["#2979FF", "#212121"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.buttonGradient}
          >
            <Text style={styles.buttonGradientText}>Entrar</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Botão de voltar */}
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => replacepath("/welcome")}
        >
          <LinearGradient
            colors={["#2979FF", "#212121"]}
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
  errorText: {
    color: "#FF5252",
    fontSize: 14,
    marginTop: 10,
    textAlign: "center",
  },
});

export default Login;
