import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, SafeAreaView, Pressable, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from "expo-router";
import styles from "../../styles/reservationsStyles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Reservations() {
    const [reservations, setReservations] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchMyReservations = async () => {
        try {
            const token = await AsyncStorage.getItem("token");
            if (token) {
                const response = await fetch('http://192.168.1.20:8000/api/myReservations', {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });
                const data = await response.json();
                if (data.success) {
                    setReservations(data.reservations);
                }
            }
            setLoading(false);
        } catch (error) {
            console.log('Error:', error);
            setLoading(false);
        }
    };

    const cancelReservation = async (reservationId: number) => {
        try {
            const token = await AsyncStorage.getItem("token");
            if (token) {
                const response = await fetch(`http://192.168.1.20:8000/api/reserva/${reservationId}`, {
                    method: 'DELETE',
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });
                const data = await response.json();
                if (data.success) {
                    fetchMyReservations();
                }
            }
        } catch (error) {
            console.log('Error cancelando:', error);
        }
    };

    useEffect(() => {
        fetchMyReservations();
    }, []);

    if (loading) {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Header />
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" color="#3b82f6" />
                        <Text style={styles.loadingText}>Carregant les teves reserves...</Text>
                    </View>
                </ScrollView>
                <Footer />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header/>

                <View style={styles.wrapper}>
                    <Text style={styles.sectionTitle}>Les meves classes</Text>

                    {reservations.length === 0 ? (
                        <View style={styles.emptyContainer}>
                            <MaterialCommunityIcons 
                                name="calendar-blank" 
                                size={80} 
                                color="#4B5563" 
                                style={styles.emptyIcon}
                            />
                            <Text style={styles.emptyTitle}>Cap reserva</Text>
                            <Text style={styles.emptyText}>
                                Encara no has reservat cap classe.{'\n'}
                                Vés a horaris i reserva la teva primera classe!
                            </Text>
                        </View>
                    ) : (
                        reservations.map((res) => (
                            <View style={styles.card} key={res.id}>
                                <View style={styles.header}>
                                    <View style={styles.titleContainer}>
                                        <Text style={styles.title}>{res.class.name}</Text>
                                        <Text style={styles.instructor}>
                                            <MaterialCommunityIcons name="account" size={14} color="#9CA3AF" />
                                            {' '}{res.class.instructor?.name} {res.class.instructor?.surnames}
                                        </Text>
                                    </View>

                                    <View style={styles.timeBadge}>
                                        <Text style={styles.timeText}>{res.class.start_time}</Text>
                                    </View>
                                </View>

                                <View style={styles.infoRow}>
                                    <View style={styles.infoItem}>
                                        <MaterialCommunityIcons
                                            name="calendar-outline"
                                            size={18}
                                            color="#9CA3AF"
                                        />
                                        <Text style={styles.infoText}>
                                            {new Date(res.class.date).toLocaleDateString('ca-ES', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric'
                                            })}
                                        </Text>
                                    </View>

                                    <View style={styles.infoItem}>
                                        <MaterialCommunityIcons
                                            name="clock-outline"
                                            size={18}
                                            color="#9CA3AF"
                                        />
                                        <Text style={styles.infoText}>1 h</Text>
                                    </View>

                                    <View style={styles.infoItem}>
                                        <MaterialCommunityIcons
                                            name="account-group-outline"
                                            size={18}
                                            color="#9CA3AF"
                                        />
                                        <Text style={styles.infoText}>
                                            {res.class.reservations_count} / {res.class.capacity}
                                        </Text>
                                    </View>
                                </View>

                                <Pressable 
                                    style={styles.cancelBtn}
                                    onPress={() => cancelReservation(res.id)}
                                >
                                    <MaterialCommunityIcons name="close-circle" size={18} color="#ef4444" />
                                    <Text style={styles.cancelText}>Cancel·lar reserva</Text>
                                </Pressable>
                            </View>
                        ))
                    )}
                </View>
            </ScrollView>
            <Footer/>
        </SafeAreaView>
    );
}