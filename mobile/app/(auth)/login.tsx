import { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setError("");
    if (!email || !password) {
      setError("Completa todos los campos");
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
      console.log("Respuesta del servidor:", data); // Para debug

      if (!response.ok) {
        // Si hay error (401, 422, etc.)
        setError(data.message || "Error en el servidor");
        setLoading(false);
      }

      // Verificar si el login fue exitoso
      if (data.success === true) {
        console.log("Login exitoso:", data.user);
        
         setLoading(false);
        // Redirigir al dashboard
        router.replace("/dashboard");
      } else {
        setError(data.message || "Credenciales incorrectas");
      }

    } 
    catch (err) {
      console.error("Error de conexión:", err);
      setError("Error de conexión con el servidor");
    }
    finally {
      setLoading(false); // Siempre se ejecuta
    }
  };

  return (
    <LinearGradient
      colors={["#FE5D5D", "#f97769", "#fb923c"]}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.welcomeText}>¡Bienvenido de nuevo!</Text>
        <Text style={styles.subtitle}>Inicia sesión</Text>
        
        <View style={styles.card}>
          {/* Mostrar error si existe */}
          {error ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          ) : null}
          
          {/* Email Input */}
          <Text style={styles.inputLabel}>Email</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Introduce tu correo electrónico"
              placeholderTextColor="#9CA3AF"
              onChangeText={setEmail}
              value={email}
              autoCapitalize="none"
              keyboardType="email-address"
              editable={!loading}
            />
          </View>
          
          {/* Password Input */}
          <Text style={styles.inputLabel}>Contraseña</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Introduce tu contraseña"
              placeholderTextColor="#9CA3AF"
              secureTextEntry={true}
              onChangeText={setPassword}
              value={password}
              editable={!loading}
            />
          </View>
          
          {/* Sign In Button */}
          <TouchableOpacity 
            style={[
              styles.signInButton, 
              loading && styles.disabledButton
            ]} 
            onPress={login}
            disabled={loading}
          >
            <Text style={styles.signInText}>
              {loading ? "Verificando..." : "Iniciar Sesión"}
            </Text>
          </TouchableOpacity>
          
          {/* Botón de prueba con datos predefinidos */}
          <TouchableOpacity 
            style={styles.testButton}
            onPress={() => {
              setEmail("juan.garcia@example.com");
              setPassword("1234");
            }}
          >
            <Text style={styles.testText}>Rellenar datos de prueba</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: 40,
  },
  card: {
    backgroundColor: "white",
    padding: 25,
    borderRadius: 16,
    width: "100%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  errorContainer: {
    backgroundColor: "#FEE2E2",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  errorText: {
    color: "#DC2626",
    textAlign: "center",
    fontSize: 14,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "#374151",
    marginBottom: 8,
  },
  inputContainer: {
    backgroundColor: "#F9FAFB",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
  },
  input: {
    fontSize: 14,
    color: "#111827",
  },
  signInButton: {
    backgroundColor: "#FE5D5D",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 16,
  },
  disabledButton: {
    backgroundColor: "#9CA3AF",
  },
  signInText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  testButton: {
    padding: 10,
    alignItems: "center",
  },
  testText: {
    color: "#6B7280",
    fontSize: 14,
    fontStyle: "italic",
  },
});