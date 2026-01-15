import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Button, Pressable } from "react-native";
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
            <View style={styles.mainContainer}>
              <View style={styles.header}>
                <View>
                  <Text style={styles.subTitle}>Benvingut de nou,</Text>
                  <Text style={styles.title}>Anderson Stiven</Text>
                </View>
              </View>
              <View style={styles.main}>
                <Pressable style={styles.redBtn}>
                  <Text style={styles.redBtnText}>Veure les teves Reserves</Text>
                </Pressable>
                <View style={styles.container}>
                  <Text style={styles.titleB}>La teva activitat</Text>
                  <Text style={styles.messageRed}>Aquest Mes</Text>
                  <View style={styles.grafh}>

                  </View>
                </View>
                <View style={styles.container}>
                  <Text style={styles.titleB}>Proxima Classe</Text>
                  <Text style={styles.messageRed}>Veure properes classes</Text>
                  <View style={styles.grafh}> </View>
                </View>
                <View style={styles.simpleContainer}>
                  <Text style={styles.titleB}>Accions ràpides</Text>
                  <View style={styles.container}>
                    <Pressable style={styles.whiteActionBtn}>
                      <Text style={styles.titleB}>Horaris</Text>
                      <Text>Veure horaris</Text>
                    </Pressable>
                    <Pressable style={styles.redActionBtn}>
                      <Text style={styles.titleB}>Reserva</Text>
                      <Text>Reserva una classe</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
              <View style={styles.footer}>
                <Text>Test</Text>
              </View>
            </View>
    );
}
const styles = StyleSheet.create({
  header: {
    justifyContent: "space-between",
    backgroundColor: "#1F2937",
    paddingTop: "30px",
    paddingBottom: "30px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },

  footer: {
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderTopWidth: "1px",
    borderTopColor: "#e4e4e4ff",
    paddingTop: "30px",
    paddingBottom: "30px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },

  main: {
    rowGap: "30px",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "40px",
    paddingBottom: "40px",
    paddingLeft: "25px",
    paddingRight: "25px",
  },

  grafh: {
    justifyContent: "center",
    backgroundColor: "#FFF",
    borderRadius: "15px",
    alignItems: "center",
    paddingTop: "30px",
    paddingBottom: "30px",
    width: "100%",
  },

  redBtn: {
    justifyContent: "center",
    backgroundColor: "#F87171",
    borderRadius: "15px",
    alignItems: "center",
    paddingTop: "30px",
    paddingBottom: "30px",
    width: "100%",
  },

  whiteActionBtn: {
    justifyContent: "center",
    backgroundColor: "#F87171",
    borderRadius: "15px",
    alignItems: "center",
    paddingTop: "30px",
    paddingBottom: "30px",
    width: "48%",
  },
  redActionBtn: {
    justifyContent: "center",
    backgroundColor: "#FFF",
    borderRadius: "15px",
    alignItems: "center",
    paddingTop: "30px",
    paddingBottom: "30px",
    width: "48%",
  },

  redBtnText: {
    color: "#fff",
    fontSize: "18px",
    fontWeight: "700",
    textTransform: "capitalize",
  },

  mainContainer: {
    flex: 1,
    width: "100%",
  },

  simpleContainer: {
    width: "100%",
  },

  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    flex: 1,
    width: "100%",
    marginBottom: "30px",
  },

  containerLine: {
    flex: 1,
    insetInline: "right",
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
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },

  titleB: {
    paddingBottom: "10px",
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },

  subTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#a8a8a8ff",
  },

  messageRed: {
    fontSize: 12,
    color: "#FE5D5D",
  },

  message: {
    fontSize: 14,
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