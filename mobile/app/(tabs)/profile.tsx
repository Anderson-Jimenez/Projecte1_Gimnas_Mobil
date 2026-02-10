import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import styles from "../../styles/profile";
import Footer from "../../components/Footer";

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* Avatar */}
        <View style={styles.avatarContainer}>
            <Image
            source={{ uri: 'https://i.pravatar.cc/300' }}
            style={styles.avatar}
            />
            <View style={styles.statusDot} />
        </View>

        {/* Nombre */}
        <Text style={styles.name}>Carlos Mendoza</Text>
        <Text style={styles.subtitle}>Miembro Premium</Text>

        {/* Información personal */}
        <Text style={styles.sectionTitle}>Información Personal</Text>

        <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Nombre completo</Text>
            <Text style={styles.inputValue}>Carlos Mendoza</Text>
        </View>

        <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Email</Text>
            <Text style={styles.inputValue}>carlos.mendoza@email.com</Text>
        </View>

        <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Teléfono</Text>
            <Text style={styles.inputValue}>+52 555 123 4567</Text>
        </View>

        <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Fecha de nacimiento</Text>
            <Text style={styles.inputValue}>1990-05-15</Text>
        </View>

        {/* Configuración */}
        <Text style={styles.sectionTitle}>Configuración Adicional</Text>

        <TouchableOpacity style={styles.optionRow}>
            <Text style={styles.optionText}>Cambiar contraseña</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow}>
            <Text style={styles.logoutText}>Cerrar sesión</Text>
        </TouchableOpacity>

        {/* Guardar */}
        <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Guardar cambios</Text>
        </TouchableOpacity>
            
        </ScrollView>
        <Footer/>
    </SafeAreaView>
  );
}
