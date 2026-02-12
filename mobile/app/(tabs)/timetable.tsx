import React, { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Text, View, ScrollView, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "../../styles/timetableStyles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useAuth } from "../../hooks/useAuth";
import CustomAlert from "../../styles/customAlert";

export default function Timetable() {
    const { isLoading } = useAuth();
    const [classes, setClasses] = useState<any[]>([]);
    const [instructors, setInstructors] = useState<any[]>([]);
    const [classNames, setClassNames] = useState<any[]>([]);
    const [reservedIds, setReservedIds] = useState<number[]>([]);

    const [instructorSeleccionat, setInstructorSeleccionat] = useState<number | "">("");
    const [nameSeleccionat, setNameSeleccionat] = useState<string | "">("");

    const [loading, setLoading] = useState(true);
    
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertTitulo, setAlertTitulo] = useState('');
    const [alertMensaje, setAlertMensaje] = useState('');
    const [alertTipo, setAlertTipo] = useState<'success' | 'error' | 'warning' | 'info'>('info');

    const days = ["dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"];
    const [daysN, setDaysN] = useState(0);

    const mostrarAlert = (titulo: string, mensaje: string, tipo: 'success' | 'error' | 'warning' | 'info') => {
        setAlertTitulo(titulo);
        setAlertMensaje(mensaje);
        setAlertTipo(tipo);
        setAlertVisible(true);
    };

    const fetchMyReservations = async () => {
        try {
            const token = await AsyncStorage.getItem("token");
            if (token) {
                const response = await fetch('http://192.168.1.20:8000/api/reserves', {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });
                const data = await response.json();
                if (data.success && data.reservations) {
                    const ids = data.reservations.map((res: any) => res.class_id);
                    setReservedIds(ids);
                }
            }
        } catch (error) {
            console.log('Error fetching my reservations:', error);
        }
    };

    const anarEnrere = () => setDaysN(prev => prev === 0 ? 5 : prev - 1);
    const anarEndavant = () => setDaysN(prev => prev === 5 ? 0 : prev + 1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://192.168.1.20:8000/api/allClasses");
                const data = await response.json();
                
                setClasses(data.classes || []);
                setInstructors(data.instructors || []);
                setClassNames(data.classNames || []);
                
                await fetchMyReservations();
                
                setLoading(false);
            } catch (err) {
                console.log(err);
                mostrarAlert('Error de conexión', 'No es va poder carregar les classes. Verifica la connexió.', 'error');
                setLoading(false);
            }
        };
        
        fetchData();
    }, []);

    if (loading) {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Header />
                    <View style={styles.loadingView}>
                        <Text style={styles.loadingText}>Carregant classes...</Text>
                    </View>
                </ScrollView>
                <Footer />
            </SafeAreaView>
        );
    }
    
    const classesFiltrades = classes.filter(clase => {
        const classDate = new Date(clase.date);
        const dayNumber = classDate.getDay();
        const adjustedDay = dayNumber === 0 ? -1 : dayNumber - 1;

        const coincideixDia = adjustedDay === daysN;
        const coincideixInstructor = instructorSeleccionat !== "" ? clase.instructor_id === instructorSeleccionat : true;
        const coincideixNom = nameSeleccionat !== "" ? clase.name === nameSeleccionat : true;
        const yaReservada = reservedIds.includes(clase.id);
        
        return coincideixDia && coincideixInstructor && coincideixNom && !yaReservada;
    });
    
    const isClassFull = (clase: any) => {
        return clase.reservations_count >= clase.capacity;
    };
    
    const handleReserve = async (classId: number) => {
        try {
            const token = await AsyncStorage.getItem("token");
            
            if (!token) {
                mostrarAlert('No autenticat', 'Has d\'iniciar sessió per reservar', 'warning');
            } else {
                const response = await fetch('http://192.168.1.20:8000/api/reserva', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${token}`,
                    },
                    body: JSON.stringify({ class_id: classId })
                });

                const data = await response.json();

                if (data.success) {
                    mostrarAlert('¡Reserva exitosa!', `Reserva #${data.reservation_id} creada correctament`, 'success');
                    
                    const classesRes = await fetch("http://192.168.1.20:8000/api/allClasses");
                    const classesData = await classesRes.json();
                    setClasses(classesData.classes);
                    await fetchMyReservations();
                } else {
                    mostrarAlert('Error', data.message, 'error');
                }
            }
        } catch (error) {
            console.log(error);
            mostrarAlert('Error de connexió', 'No es va poder connectar amb el servidor', 'error');
        }
    };
    
    if (isLoading) {
        return (
            <SafeAreaView style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" color="#ff6b6b" />
                <Text style={{ marginTop: 10, color: '#666' }}>Carregant...</Text>
            </SafeAreaView>
        );
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header />

                <View style={styles.dayView}>
                    <MaterialCommunityIcons name="arrow-left" size={32} color="#000" onPress={anarEnrere} />
                    <Text style={styles.dayText}>{days[daysN]}</Text>
                    <MaterialCommunityIcons name="arrow-right" size={32} color="#000" onPress={anarEndavant} />
                </View>

                <View style={styles.pickerWrapper}>
                    <Picker
                        style={styles.picker}
                        selectedValue={instructorSeleccionat}
                        onValueChange={(itemValue) => setInstructorSeleccionat(itemValue === "" ? "" : Number(itemValue))}
                    >
                        <Picker.Item label="Tots els instructors" value="" />
                        {instructors.map(inst => (
                            <Picker.Item key={inst.id} label={`${inst.name} ${inst.surnames}`} value={inst.id} />
                        ))}
                    </Picker>

                    <Picker
                        style={styles.picker}
                        selectedValue={nameSeleccionat}
                        onValueChange={(itemValue) => setNameSeleccionat(itemValue === "" ? "" : itemValue)}
                    >
                        <Picker.Item label="Totes les classes" value="" />
                        {classNames.map((name, idx) => (
                            <Picker.Item key={idx} label={name} value={name} />
                        ))}
                    </Picker>
                </View>

                {classesFiltrades.length === 0 ? (
                    <View style={styles.emptyView}>
                        <MaterialCommunityIcons name="calendar-remove" size={50} color="#cbd5e1" />
                        <Text style={styles.emptyText}>No hi ha classes disponibles</Text>
                    </View>
                ) : (
                    classesFiltrades.map(clase => {
                        const classFull = isClassFull(clase);
                        const porcentajeOcupacion = (clase.reservations_count / clase.capacity) * 100;
                        
                        return (
                            <View style={[styles.card, classFull && styles.cardFull]} key={clase.id}>
                                <View style={styles.header}>
                                    <Text style={styles.title}>{clase.name}</Text>
                                    <View style={[styles.timeBadge, classFull && styles.timeBadgeFull]}>
                                        <Text style={[styles.timeText, classFull && styles.timeTextFull]}>{clase.start_time}</Text>
                                    </View>
                                </View>

                                <Text style={styles.instructor}>
                                    Instructor: {clase.instructor.name} {clase.instructor.surnames}
                                </Text>

                                <View style={styles.footer}>
                                    <View style={styles.footerItem}>
                                        <MaterialCommunityIcons name="calendar-outline" size={16} color="#cbd5e1" />
                                        <Text style={styles.footerText}>{clase.date}</Text>
                                    </View>

                                    <View style={styles.footerItem}>
                                        <MaterialCommunityIcons name="account-group-outline" size={16} color={porcentajeOcupacion > 80 ? "#ef4444" : "#cbd5e1"} />
                                        <Text style={[styles.footerText, porcentajeOcupacion > 80 && {color: "#ef4444", fontWeight: "bold"}]}>
                                            {clase.reservations_count}/{clase.capacity}
                                        </Text>
                                    </View>
                                </View>

                                {classFull ? (
                                    <View style={styles.fullBtn}>
                                        <MaterialCommunityIcons name="alert-circle" size={20} color="#fff" style={{marginRight: 8}} />
                                        <Text style={styles.fullText}>COMPLET</Text>
                                    </View>
                                ) : (
                                    <TouchableOpacity 
                                        style={styles.reservaBtn} 
                                        onPress={() => handleReserve(clase.id)}
                                    >
                                        <Text style={styles.reservaText}>Reservar</Text>
                                    </TouchableOpacity>
                                )}
                            </View>
                        );
                    })
                )}
            </ScrollView>
            <Footer />
            
            <CustomAlert
                visible={alertVisible}
                titulo={alertTitulo}
                mensaje={alertMensaje}
                tipo={alertTipo}
                onClose={() => setAlertVisible(false)}
            />
        </SafeAreaView>
    );
}