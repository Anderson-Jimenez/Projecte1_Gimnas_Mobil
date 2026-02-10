import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Styles from "../styles/headerFooter";

export default function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (!token) return;

        const BACKEND_URL = "http://192.168.12.23:8000";

        const response = await fetch(`${BACKEND_URL}/api/user`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (response.ok) {
          setUser(data.user);
        } else {
          console.log("Error al traer usuario:", data.message);
        }
      } catch (err) {
        console.error("Error al obtener usuario:", err);
      }
    };

    fetchUser();
  }, []);

  return (
    <View style={Styles.header}>
      <View>
        <Text style={Styles.welcomeText}>Benvingut de nou,</Text>
        <Text style={Styles.userName}>{user ? user.name : '...'} {user ? user.surnames : '...'}</Text>
      </View>
      <Image
        source={{ uri: 'https://via.placeholder.com/50' }} // Substitueix per la imatge real
        style={Styles.profilePic}
      />
    </View>
  );
};
