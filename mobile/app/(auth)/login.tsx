import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import styles from "../../styles/login";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const login = async () => {
    setError("");
    if (!email || !password) {
      setError("Completa tots els camps");
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const BACKEND_URL = "http://192.168.1.20:8000";

      const response = await fetch(`${BACKEND_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          password: password
        }),
      });

      const data = await response.json();
      console.log("Resposta del servidor:", data);

      if (!response.ok) {
        setError(data.message || "Error al servidor");
        setLoading(false);
        return;
      }

      if (data.success === true) {
        console.log("Login exitós:", data.user);
        await AsyncStorage.setItem("token", data.token);
        router.replace("/dashboard");
      } else {
        setError(data.message || "Credencials incorrectes");
      }
    } 
    catch (err) {
      console.error("Error de connexió:", err);
      setError("Error de connexió amb el servidor");
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient
      colors={["#FE5D5D", "#f97769", "#fb923c"]}
      style={styles.container}
    >
      <View style={styles.content}>

        <View style={styles.logoContainer}>
          <View style={styles.logoBackground}>
            <Ionicons name="barbell" size={50} color="#FE5D5D" />
          </View>
          <Text style={styles.gymName}>GYM PRO</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.welcomeText}>Benvingut de nou!</Text>
          <Text style={styles.subtitle}>Inicia sessió per continuar</Text>
          
          <Text style={styles.inputLabel}>Correu electrònic</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color="#9CA3AF" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Introdueix el teu correu"
              placeholderTextColor="#9CA3AF"
              onChangeText={setEmail}
              value={email}
              autoCapitalize="none"
              keyboardType="email-address"
              editable={!loading}
            />
          </View>
          
          {/* Password Input amb icona */}
          <Text style={styles.inputLabel}>Contrasenya</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#9CA3AF" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Introdueix la teva contrasenya"
              placeholderTextColor="#9CA3AF"
              secureTextEntry={!showPassword}
              onChangeText={setPassword}
              value={password}
              editable={!loading}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
              <Ionicons 
                name={showPassword ? "eye-outline" : "eye-off-outline"} 
                size={20} 
                color="#9CA3AF" 
              />
            </TouchableOpacity>
          </View>

          {/* Missatge d'error */}
          {error ? (
            <View style={styles.errorContainer}>
              <Ionicons name="alert-circle-outline" size={18} color="#FE5D5D" />
              <Text style={styles.errorText}>{error}</Text>
            </View>
          ) : null}
          
          {/* Botó d'inici de sessió */}
          <TouchableOpacity 
            style={[
              styles.signInButton, 
              loading && styles.disabledButton
            ]} 
            onPress={login}
            disabled={loading}
          >
            <Text style={styles.signInText}>
              {loading ? "Verificant..." : "Iniciar sessió"}
            </Text>
            {!loading && <Ionicons name="arrow-forward" size={20} color="white" style={styles.buttonIcon} />}
          </TouchableOpacity>
          
          {/* Botó de prova */}
          <TouchableOpacity 
            style={styles.testButton}
            onPress={() => {
              setEmail("juan.garcia@example.com");
              setPassword("1234");
            }}
          >
            <Ionicons name="person-circle-outline" size={16} color="#6B7280" />
            <Text style={styles.testText}> Omplir dades de prova</Text>
          </TouchableOpacity>
        </View>

        {/* Elements decoratius */}
        <View style={styles.decorativeCircle1} />
        <View style={styles.decorativeCircle2} />
      </View>
    </LinearGradient>
  );
}