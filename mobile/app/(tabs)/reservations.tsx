import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, SafeAreaView, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Si uses Expo, si no, react-native-vector-icons
import { router } from "expo-router";
import styles from "../../styles/reservationsStyles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Reservations() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Header/>

                <View style={styles.wrapper}>
                    <Text style={styles.sectionTitle}>Classes Reservades</Text>

                    <View style={styles.card}>
                        {/* Header */}
                        <View style={styles.header}>
                        <View>
                            <Text style={styles.title}>HIIT</Text>
                            <Text style={styles.instructor}>instructor: Artur Bartres</Text>
                        </View>

                        <View style={styles.timeBadge}>
                            <Text style={styles.timeText}>16:00</Text>
                        </View>
                        </View>

                        {/* Info row */}
                        <View style={styles.infoRow}>
                        <View style={styles.infoItem}>
                            <MaterialCommunityIcons
                            name="calendar-outline"
                            size={16}
                            color="#CBD5E1"
                            />
                            <Text style={styles.infoText}>Avui 27</Text>
                        </View>

                        <View style={styles.infoItem}>
                            <MaterialCommunityIcons
                            name="clock-outline"
                            size={16}
                            color="#CBD5E1"
                            />
                            <Text style={styles.infoText}>1 h</Text>
                        </View>

                        <View style={styles.infoItem}>
                            <MaterialCommunityIcons
                            name="account-group-outline"
                            size={16}
                            color="#CBD5E1"
                            />
                            <Text style={styles.infoText}>12/15</Text>
                        </View>
                        </View>

                        {/* Button */}
                        <Pressable style={styles.cancelBtn}>
                            <Text style={styles.cancelText}>Cancel·lar</Text>
                        </Pressable>
                    </View>
                    </View>
            </ScrollView>

            <Footer/>
        </SafeAreaView>
    );
};
