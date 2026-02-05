import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Si uses Expo, si no, react-native-vector-icons
import { router } from "expo-router";
import Styles from "../../styles/dashboardStyles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Profile() {
    return (
        <SafeAreaView style={Styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Header/>

                <Text>
                    Perfil
                </Text>
            </ScrollView>

            <Footer/>
        </SafeAreaView>
    );
};
