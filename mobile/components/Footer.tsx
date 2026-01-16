import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Si uses Expo, si no, react-native-vector-icons
import { router } from "expo-router";
import Styles from "../styles/headerFooter";

export default function Footer() {
    return (
        <View style={Styles.navbar}>
            <View style={Styles.flexContainer}>
                <MaterialCommunityIcons name="home" size={28} color="#999" onPress={() => router.push("/dashboard")} />
                <Text style={{ color: '#999' }}>Home</Text>
            </View>
            <View style={Styles.flexContainer}>
                <MaterialCommunityIcons name="calendar" size={28} color="#999" onPress={() => router.push("/timetable")}/>
                <Text style={{ color: '#999' }}>Horaris</Text>
            </View>
            <View style={Styles.flexContainer}>
                <MaterialCommunityIcons name="chart-bar" size={28} color="#999" onPress={() => router.push("/reservations")} />
                <Text style={{ color: '#999' }}>Reservas</Text>
            </View>
            <View style={Styles.flexContainer}>
                <MaterialCommunityIcons name="account" size={28} color="#999" onPress={() => router.push("/profile")}/>
                <Text style={{ color: '#999' }}>Perfil</Text>
            </View>
            
            
            
        </View>

        //Color Seleccionat ff6b6b
    );
};

