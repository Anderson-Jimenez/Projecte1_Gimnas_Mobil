import React, { useEffect, useState  } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Si uses Expo, si no, react-native-vector-icons
import { router } from "expo-router";
import styles from "../../styles/timetableStyles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Timetable() {
    
    const [classes, setClasses] = useState<any[]>([]);
    

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const days=["dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"];
    const [daysN, setDaysN] = useState(0);

    /* Funcions */

    const anarEnrere = () => {
        if(daysN===0){
            setDaysN(5);
        }
        else{
            setDaysN(daysN - 1);
        }
    };

    const anarEndavant = () => {
        if(daysN===5){
            setDaysN(0);
        }
        else{
            setDaysN(daysN + 1);
        }
    };

    /*-----------*/

    useEffect(() => {
        fetch("http://192.168.1.191:8000/api/allClasses")
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error en la resposta de la API');
                }
                return response.json();
            })
            .then((data) => {
                console.log("Dades de l'API:", data);
                setClasses(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fent fetch:', error);
                setError(error.message);
                setLoading(false);
            });
    }, [])

    if (loading) {
        
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Header />
                    <View>
                        <Text>Carregant classes...</Text>
                    </View>
                </ScrollView>
                <Footer />
            </SafeAreaView>
        );
    }

    const classesDelDia = classes.filter(clase => 
        clase.date.toLowerCase() === days[daysN].toLowerCase()
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Header />
                <View style={styles.dayView}>
                    <MaterialCommunityIcons name="arrow-left" size={32} color="#000" onPress={anarEnrere} />
                    <Text style={styles.dayText}>{days[daysN]}</Text>
                    <MaterialCommunityIcons name="arrow-right" size={32} color="#000" onPress={anarEndavant}/>
                </View>
                
                

                {classesDelDia.map((clase) => (
                    <View style={styles.card}>
                        {/* Header */}
                        <View style={styles.header}>
                            <Text style={styles.title}>{clase.name}</Text>
                            <View style={styles.timeBadge}>
                                <Text style={styles.timeText}>{clase.start_time}</Text>
                            </View>
                        </View>

                        {/* Instructor */}
                        <Text style={styles.instructor}>Instructor: {clase.instructor.name} {clase.instructor.surnames}</Text>

                        {/* Footer info */}
                        <View style={styles.footer}>
                            <View style={styles.footerItem}>
                                <MaterialCommunityIcons name="calendar-outline" size={16} color="#cbd5e1" />
                                <Text style={styles.footerText}>{clase.date}</Text>
                            </View>

                            <View style={styles.footerItem}>
                                <MaterialCommunityIcons name="clock-outline" size={16} color="#cbd5e1" />
                                <Text style={styles.footerText}>1 h</Text>
                            </View>

                            <View style={styles.footerItem}>
                                <MaterialCommunityIcons name="account-group-outline" size={16} color="#cbd5e1" />
                                <Text style={styles.footerText}>{clase.reservations_count}/{clase.capacity}</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.reservaBtn}>
                            <Text style={styles.reservaText}>Reservar</Text>
                        </TouchableOpacity>
                    </View>
                ))}

                
            </ScrollView>

            <Footer />
        </SafeAreaView>
    );
};
