import React, { useState } from "react";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import api from "@/api";

const register = () => {
  const navigate = useRouter();
  const replacepath = (path: any) => {
    navigate.replace(path);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      setError("");

      await api.post("/api/user", {
        name,
        email,
        cpf,
        password,
        confirmPassword,
      });
      navigate.replace("/login");
    } catch (error) {
      console.log(error);
      setError(
        "Erro ao registrar usuário. Verifique os dados e tente novamente."
      );
    }
  };

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
            Registre-se
          </Text>
        </View>

        <TextInput
          placeholder="Nome completo*"
          placeholderTextColor="#FFF"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="E-mail*"
          placeholderTextColor="#FFF"
          keyboardType="email-address"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="CPF*"
          placeholderTextColor="#FFF"
          keyboardType="numeric"
          style={styles.input}
          value={cpf}
          onChangeText={setCpf}
          maxLength={14}
        />
        <TextInput
          placeholder="Senha*"
          placeholderTextColor="#FFF"
          secureTextEntry={true}
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          placeholder="Repita a senha*"
          placeholderTextColor="#FFF"
          secureTextEntry={true}
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        {error !== "" && <Text style={styles.errorText}>{error}</Text>}

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleRegister}
        >
          <LinearGradient
            colors={["#2979FF", "#212121"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.buttonGradient}
          >
            <Text style={styles.buttonGradientText}>Enviar</Text>
          </LinearGradient>
        </TouchableOpacity>

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
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
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
    marginTop: 15,
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
    color: "#FFF",
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

export default register;
