import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, SafeAreaView, Pressable, ActivityIndicator, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFocusEffect } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "../../styles/reservationsStyles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CustomAlert from "../../styles/customAlert";
import QRModal from "../../components/QRModal";

export default function Reservations() {
    const [reservations, setReservations] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    
    // Estados para CustomAlert
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertTitulo, setAlertTitulo] = useState('');
    const [alertMensaje, setAlertMensaje] = useState('');
    const [alertTipo, setAlertTipo] = useState<'success' | 'error' | 'warning'>('success');
    
    // Estados para QRModal
    const [qrModalVisible, setQrModalVisible] = useState(false);
    const [qrData, setQrData] = useState<string | null>(null);
    const [qrClassInfo, setQrClassInfo] = useState({ name: '', time: '' });
    const [scanSuccess, setScanSuccess] = useState(false);

    const API_URL = 'http://192.168.1.20:8000/api';

    // CARGAR RESERVAS - SOLO ACTIVAS
    const fetchMyReservations = async () => {
        try {
            const token = await AsyncStorage.getItem("token");
            if (token) {
                const response = await fetch(`${API_URL}/myReservations`, {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });
                const data = await response.json();
                if (data.success) {
                    setReservations(data.reservations);
                }
            }
        } catch (error) {
            console.log('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    // ✅ CANCELAR RESERVA - LÓGICA ORIGINAL (SIN ALERT)
    const cancelReservation = async (reservationId: number) => {
        try {
            const token = await AsyncStorage.getItem("token");
            if (token) {
                const response = await fetch(`${API_URL}/reserva/${reservationId}`, {
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

    // GENERAR QR
    const generateQR = async (reservationId: number, className: string, classTime: string) => {
        try {
            const token = await AsyncStorage.getItem("token");
            if (token) {
                const response = await fetch(`${API_URL}/reservation/${reservationId}/qr`, {
                    headers: { "Authorization": `Bearer ${token}` },
                });
                const data = await response.json();
                
                if (data.success) {
                    setQrData(data.qr_data);
                    setQrClassInfo({ 
                        name: className, 
                        time: classTime 
                    });
                    setScanSuccess(false);
                    setQrModalVisible(true);
                } else {
                    setAlertTitulo('QR no disponible');
                    setAlertMensaje(data.message);
                    setAlertTipo('error');
                    setAlertVisible(true);
                }
            }
        } catch (error) {
            console.log('Error generando QR:', error);
            setAlertTitulo('Error');
            setAlertMensaje('No s\'ha pogut generar el QR');
            setAlertTipo('error');
            setAlertVisible(true);
        }
    };

    // SIMULAR ESCÀNER QR
    const simulateScan = async () => {
        if (!qrData) return;
        
        try {
            const token = await AsyncStorage.getItem("token");
            if (token) {
                const response = await fetch(`${API_URL}/scan-qr`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({ qr_data: qrData })
                });
                
                const data = await response.json();
                
                if (data.success) {
                    setScanSuccess(true);
                    setAlertTitulo('✅ QR registrat');
                    setAlertMensaje('QR registrat correctament');
                    setAlertTipo('success');
                    setAlertVisible(true);
                    
                    setTimeout(() => {
                        setQrModalVisible(false);
                        setScanSuccess(false);
                        fetchMyReservations();
                    }, 1500);
                } else {
                    setAlertTitulo('❌ Error');
                    setAlertMensaje(data.message);
                    setAlertTipo('error');
                    setAlertVisible(true);
                }
            }
        } catch (error) {
            console.log('Error escanejant QR:', error);
            setAlertTitulo('❌ Error');
            setAlertMensaje('No s\'ha pogut registrar el QR');
            setAlertTipo('error');
            setAlertVisible(true);
        }
    };

    useEffect(() => {
        fetchMyReservations();
        
        const interval = setInterval(() => {
            fetchMyReservations();
        }, 5000);
        
        return () => clearInterval(interval);
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            fetchMyReservations();
        }, [])
    );

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

                                <View style={styles.actionsRow}>
                                    <Pressable 
                                        style={styles.qrBtn}
                                        onPress={() => generateQR(
                                            res.id,
                                            res.class.name,
                                            `${new Date(res.class.date).toLocaleDateString('ca-ES')} - ${res.class.start_time}`
                                        )}
                                    >
                                        <MaterialCommunityIcons name="qrcode-scan" size={18} color="#3b82f6" />
                                        <Text style={styles.qrText}>Veure QR</Text>
                                    </Pressable>

                                    <Pressable 
                                        style={styles.cancelBtn}
                                        onPress={() => cancelReservation(res.id)}
                                    >
                                        <MaterialCommunityIcons name="close-circle" size={18} color="#ef4444" />
                                        <Text style={styles.cancelText}>Cancel·lar reserva</Text>
                                    </Pressable>
                                </View>
                            </View>
                        ))
                    )}
                </View>
            </ScrollView>

            <CustomAlert
                visible={alertVisible}
                titulo={alertTitulo}
                mensaje={alertMensaje}
                tipo={alertTipo}
                onClose={() => setAlertVisible(false)}
            />

            <QRModal
                visible={qrModalVisible}
                onClose={() => {
                    setQrModalVisible(false);
                    setScanSuccess(false);
                }}
                qrData={qrData}
                className={qrClassInfo.name}
                classTime={qrClassInfo.time}
                onScanSuccess={scanSuccess}
                onSimulateScan={simulateScan}
            />
            
            <Footer/>
        </SafeAreaView>
    );
}