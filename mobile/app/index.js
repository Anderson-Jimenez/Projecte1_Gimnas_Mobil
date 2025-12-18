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
        colors={["#FE5D5D","#f97769","#fb923c"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
        >
            <View style={styles.card}>

            </View>
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
    backgroundColor: "white",
    padding: 25,
    borderRadius: 16,
    width: "80%",
    alignItems: "center",
    backdropFilter: "blur(10px)",
  },

  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#374151",
    marginBottom: 10,
  },

  message: {
    fontSize: 12,
    color: "#ADAEBC",
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