import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Si uses Expo, si no, react-native-vector-icons
import { router } from "expo-router";
import styles from "../../styles/timetableStyles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Timetable() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Header />

                <View style={styles.card}>
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={styles.title}>HIIT</Text>
                        <View style={styles.timeBadge}>
                            <Text style={styles.timeText}>16:00</Text>
                        </View>
                    </View>

                    {/* Instructor */}
                    <Text style={styles.instructor}>Instructor: Artur Bartres</Text>

                    {/* Footer info */}
                    <View style={styles.footer}>
                        <View style={styles.footerItem}>
                            <MaterialCommunityIcons name="calendar-outline" size={16} color="#cbd5e1" />
                            <Text style={styles.footerText}>Avui 27</Text>
                        </View>

                        <View style={styles.footerItem}>
                            <MaterialCommunityIcons name="clock-outline" size={16} color="#cbd5e1" />
                            <Text style={styles.footerText}>1 h</Text>
                        </View>

                        <View style={styles.footerItem}>
                            <MaterialCommunityIcons name="account-group-outline" size={16} color="#cbd5e1" />
                            <Text style={styles.footerText}>12/15</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <Footer />
        </SafeAreaView>
    );
};
