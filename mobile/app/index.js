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