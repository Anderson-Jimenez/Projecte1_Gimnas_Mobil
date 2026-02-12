import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View, ScrollView, Image, TouchableOpacity, SafeAreaView, Pressable, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from "expo-router";
import Styles from "../../styles/dashboardStyles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useAuth } from "../../hooks/useAuth";
import { LineChart } from "react-native-gifted-charts";
import { Dimensions } from 'react-native';

export default function GymDashboard() {
  const { isLoading, logout } = useAuth();
  const [ultimaReserva, setUltimaReserva] = useState<any>(null);
  const dades = [{value: 10, label: 'Dl'},{value: 20, label: 'Dt'},{value: 18, label: 'Dc'},{value: 40, label: 'Dj'},{value: 30, label: 'Dv'},{value: 10, label: 'Ds'}];
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    const fetchUltimaReserva = async () => {
    

      try {
        const token = await AsyncStorage.getItem("token");
        if (!token) return;

        const BACKEND_URL = "http://192.168.56.1:8000";

        const response = await fetch(`${BACKEND_URL}/api/indexDashboard`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (response.ok) {
          setUltimaReserva(data.ultimaReserva);
          console.log(data.ultimaReserva)
          console.log(data.stats)
        } else {
          console.log("Error al traer classe:", data.message);
        }
      } catch (err) {
        console.error("Error al obtener classe:", err);
      }
    };

    fetchUltimaReserva();
  }, []);
  

  if (isLoading) {
    return (
      <SafeAreaView style={[Styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#ff6b6b" />
        <Text style={{ marginTop: 10, color: '#666' }}>Cargando...</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header/>

        {/* BUTTON: VEURE RESERVES */}
        <TouchableOpacity style={Styles.reservesBtn} onPress={() => router.push("/reservations")}>
          <View style={Styles.iconContainer}>
            <MaterialCommunityIcons name="calendar-month" size={24} color="#ff6b6b" />
          </View>
          <Text style={Styles.reservesBtnText}>Veure les teves Reserves</Text>
        </TouchableOpacity>

        {/* GRÀFIC (Placeholder) */}
        <View style={Styles.sectionHeader}>
          <Text style={Styles.sectionTitle}>La Teva Activitat</Text>
        </View>
        <View style={Styles.chartPlaceholder}>
          <LineChart 
            data={dades}
            color="#ff6b6b" 
            thickness={3}
            noOfSections={5}

            initialSpacing={15}      // Espai abans del primer punt
          />
        </View>

        {/* PROXIMA CLASSE CARD */}
        <View style={Styles.sectionHeader}>
          <Text style={Styles.sectionTitle}>Proxima Classe</Text>
        </View>

        <View style={Styles.classCard}>
          <View style={Styles.classHeader}>
            <View style={Styles.tag}><Text style={Styles.tagText}>PROXIMA</Text></View>
            <View style={Styles.timeBadge}><Text style={Styles.timeText}>{ultimaReserva?.gym_class?.start_time}</Text></View>
          </View>

          <Text style={Styles.className}>{ultimaReserva?.gym_class?.name}</Text>
          <Text style={Styles.instructor}>instructor: <Text style={{ fontWeight: '500' }}>{ultimaReserva?.gym_class?.instructor?.name} {ultimaReserva?.gym_class?.instructor?.surnames}</Text></Text>

          <View style={Styles.classInfoRow}>
            <Text style={Styles.infoItem}><MaterialCommunityIcons name="calendar" size={14} /> {ultimaReserva?.gym_class?.date}</Text>
            <Text style={Styles.infoItem}><MaterialCommunityIcons name="clock-outline" size={14} /> 1h</Text>
            <Text style={Styles.infoItem}><MaterialCommunityIcons name="account-group" size={14} /> {ultimaReserva?.gym_class?.reservations_count}/{ultimaReserva?.gym_class?.capacity}</Text>
          </View>

          <TouchableOpacity style={Styles.cancelBtn}>
            <Text style={Styles.cancelBtnText}>Cancel·lar Reserva</Text>
          </TouchableOpacity>
        </View>

        {/* ACCIONS RÀPIDES */}
        <Text style={[Styles.sectionTitle, { marginTop: 20, marginLeft: 20 }]}>Accions ràpides</Text>
        <View style={Styles.quickActions}>
          <Pressable style={Styles.actionCardWhite} onPress={() => router.push("/timetable")}>
            <View style={Styles.actionIconGray}><MaterialCommunityIcons name="calendar-clock" size={24} color="#333" /></View>
            <Text style={Styles.actionTitle}>Horaris</Text>
            <Text style={Styles.actionSub}>Veure horaris</Text>
          </Pressable>
          <Pressable style={Styles.actionCardRed} onPress={() => router.push("/reservations")}>
            <View style={Styles.actionIconWhite}><MaterialCommunityIcons name="plus" size={24} color="#ff6b6b" /></View>
            <Text style={Styles.actionTitleWhite}>Reserva</Text>
            <Text style={Styles.actionSubWhite}>Reserva una classe</Text>
          </Pressable>
        </View>

      </ScrollView>

      <Footer/>

    </SafeAreaView>
  );
};