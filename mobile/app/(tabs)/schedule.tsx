import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { router } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomAlert from '../../styles/customAlert';  // ← Importas CustomAlert

export default function Schedule() {
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertTitulo, setAlertTitulo] = useState('');
    const [alertMensaje, setAlertMensaje] = useState('');
    const [alertTipo, setAlertTipo] = useState<'success' | 'error' | 'warning'>('success');
    
    const API_URL = 'http://192.168.1.20:8000/api';

    // ✅ ESTA FUNCIÓN VA AQUÍ - en schedule.tsx
    const handleReserve = async (classId: number, className: string, classDate: string, classTime: string) => {
        try {
            const token = await AsyncStorage.getItem("token");
            if (token) {
                const response = await fetch(`${API_URL}/reserva`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({ class_id: classId })
                });

                const data = await response.json();
                
                if (data.success) {
                    // Guardar para refrescar reservas después
                    await AsyncStorage.setItem('new_reservation', JSON.stringify({
                        id: data.reservation_id,
                        class_name: className,
                        class_date: classDate,
                        class_time: classTime
                    }));
                    
                    // Mostrar alert de éxito
                    setAlertTitulo('✅ Reserva confirmada!');
                    setAlertMensaje('QR generat correctament. El trobaràs a "Les meves classes".');
                    setAlertTipo('success');
                    setAlertVisible(true);
                    
                    // Navegar a reservas después de 1.5 segundos
                    setTimeout(() => {
                        router.push('/(tabs)/reservations');
                    }, 1500);
                } else {
                    setAlertTitulo('❌ Error');
                    setAlertMensaje(data.message);
                    setAlertTipo('error');
                    setAlertVisible(true);
                }
            }
        } catch (error) {
            console.log('Error:', error);
            setAlertTitulo('❌ Error');
            setAlertMensaje('No s\'ha pogut fer la reserva');
            setAlertTipo('error');
            setAlertVisible(true);
        }
    };

    return (
        <ScrollView>
            {/* Tu contenido de horarios */}
            {classes.map((clase) => (
                <Pressable 
                    key={clase.id}
                    onPress={() => handleReserve(
                        clase.id, 
                        clase.name, 
                        clase.date, 
                        clase.start_time
                    )}
                >
                    {/* Tarjeta de la clase */}
                </Pressable>
            ))}

            {/* CustomAlert - siempre al final del componente */}
            <CustomAlert
                visible={alertVisible}
                titulo={alertTitulo}
                mensaje={alertMensaje}
                tipo={alertTipo}
                onClose={() => setAlertVisible(false)}
            />
        </ScrollView>
    );
}