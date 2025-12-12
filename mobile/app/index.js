import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Index(){
    const [message,setMessage]=useState("Cargant...");

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/ping")
        .then((res) => res.json())
        .then((data) => setMessage(data.message))
        .catch((err) => setMessage("Error: " + err.message));

    }, []);

    return (
        <LinearGradient
        colors={["#4f46e5", "#6d28d9", "#8b5cf6"]}
        style={styles.container}
        >
            <View style={styles.card}>
                <Text style={styles.title}>Això es una proba de estils estranya</Text>
                <Text style={styles.message}>{message}</Text>
            </View>
        </LinearGradient>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 25,
    borderRadius: 16,
    width: "80%",
    alignItems: "center",
    backdropFilter: "blur(10px)",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },

  message: {
    fontSize: 18,
    color: "#fefefe",
  },
});


/*
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index(){
    const [message,setMessage]=useState("Cargant...");

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/ping")
        .then((res) => res.json())
        .then((data) => setMessage(data.message))
        .catch((err) => setMessage("Error: " + err.message));

    }, []);

    return(
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>{message}</Text>
        </View>
    )
}
    */