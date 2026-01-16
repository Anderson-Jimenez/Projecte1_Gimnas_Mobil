import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, SafeAreaView, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Si uses Expo, si no, react-native-vector-icons
import { router } from "expo-router";
import Styles from "../../styles/dashboardStyles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function GymDashboard() {

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <Header/>

        {/* BUTTON: VEURE RESERVES */}
        <TouchableOpacity style={Styles.reservesBtn}>
          <View style={Styles.iconContainer}>
            <MaterialCommunityIcons name="calendar-month" size={24} color="#ff6b6b" />
          </View>
          <Text style={Styles.reservesBtnText}>Veure les teves Reserves</Text>
        </TouchableOpacity>

        {/* GRÀFIC (Placeholder) */}
        <View style={Styles.sectionHeader}>
          <Text style={Styles.sectionTitle}>La Teva Activitat</Text>
          <Text style={Styles.sectionLink}>Aquest mes</Text>
        </View>
        <View style={Styles.chartPlaceholder}>
          {/* Aquí aniria un component com 'react-native-wagmi-charts' o 'react-native-chart-kit' */}
          <Text style={{ color: '#999' }}>Espai per al gràfic de barres</Text>
        </View>

        {/* PROXIMA CLASSE CARD */}
        <View style={Styles.sectionHeader}>
          <Text style={Styles.sectionTitle}>Proxima Classe</Text>
          <Text style={Styles.sectionLink}>Veure properes classes</Text>
        </View>

        <View style={Styles.classCard}>
          <View style={Styles.classHeader}>
            <View style={Styles.tag}><Text style={Styles.tagText}>PROXIMA</Text></View>
            <View style={Styles.timeBadge}><Text style={Styles.timeText}>5:30 PM</Text></View>
          </View>

          <Text style={Styles.className}>HIIT</Text>
          <Text style={Styles.instructor}>instructor: <Text style={{ fontWeight: '500' }}>Artur Bartres</Text></Text>

          <View style={Styles.classInfoRow}>
            <Text style={Styles.infoItem}><MaterialCommunityIcons name="calendar" size={14} /> Avui</Text>
            <Text style={Styles.infoItem}><MaterialCommunityIcons name="clock-outline" size={14} /> 45 min</Text>
            <Text style={Styles.infoItem}><MaterialCommunityIcons name="account-group" size={14} /> 12/15</Text>
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