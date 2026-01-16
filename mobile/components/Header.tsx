import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Si uses Expo, si no, react-native-vector-icons
import { router } from "expo-router";
import Styles from "../styles/headerFooter";

export default function Footer() {
    return (
        <View style={Styles.header}>
          <View>
            <Text style={Styles.welcomeText}>Benvingut de nou,</Text>
            <Text style={Styles.userName}>Sarah Johnson</Text>
          </View>
          <Image
            source={{ uri: 'https://via.placeholder.com/50' }} // Substitueix per la imatge real
            style={Styles.profilePic}
          />
        </View>
    );
};