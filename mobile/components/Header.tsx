import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, SafeAreaView, Pressable, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Styles from "../styles/headerFooter";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAuth } from "../hooks/useAuth";

export default function Header() {
  const [user, setUser] = useState(null);
  const { logout } = useAuth();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (!token) return;

        const BACKEND_URL = "http://192.168.56.1:8000";

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
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }}>
        <View>
          <Text style={Styles.welcomeText}>Benvingut de nou,</Text>
          <Text style={Styles.userName}>{user ? user.name : '...'} {user ? user.surnames : '...'}</Text>
        </View>
      </View>

      
        <TouchableOpacity onPress={logout} style={{ padding: 10 }}>
          <MaterialCommunityIcons name="logout" size={30} color="#ff6b6b" />
        </TouchableOpacity>
    </View>
  );
};
