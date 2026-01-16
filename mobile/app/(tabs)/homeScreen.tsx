import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Si uses Expo, si no, react-native-vector-icons

export default function GymDashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Benvingut de nou,</Text>
            <Text style={styles.userName}>Sarah Johnson</Text>
          </View>
          <Image
            source={{ uri: 'https://via.placeholder.com/50' }} // Substitueix per la imatge real
            style={styles.profilePic}
          />
        </View>

        {/* BUTTON: VEURE RESERVES */}
        <TouchableOpacity style={styles.reservesBtn}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="calendar-month" size={24} color="#ff6b6b" />
          </View>
          <Text style={styles.reservesBtnText}>Veure les teves Reserves</Text>
        </TouchableOpacity>

        {/* GRÀFIC (Placeholder) */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>La Teva Activitat</Text>
          <Text style={styles.sectionLink}>Aquest mes</Text>
        </View>
        <View style={styles.chartPlaceholder}>
          {/* Aquí aniria un component com 'react-native-wagmi-charts' o 'react-native-chart-kit' */}
          <Text style={{ color: '#999' }}>Espai per al gràfic de barres</Text>
        </View>

        {/* PROXIMA CLASSE CARD */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Proxima Classe</Text>
          <Text style={styles.sectionLink}>Veure properes classes</Text>
        </View>

        <View style={styles.classCard}>
          <View style={styles.classHeader}>
            <View style={styles.tag}><Text style={styles.tagText}>PROXIMA</Text></View>
            <View style={styles.timeBadge}><Text style={styles.timeText}>5:30 PM</Text></View>
          </View>

          <Text style={styles.className}>HIIT</Text>
          <Text style={styles.instructor}>instructor: <Text style={{ fontWeight: '500' }}>Artur Bartres</Text></Text>

          <View style={styles.classInfoRow}>
            <Text style={styles.infoItem}><MaterialCommunityIcons name="calendar" size={14} /> Avui</Text>
            <Text style={styles.infoItem}><MaterialCommunityIcons name="clock-outline" size={14} /> 45 min</Text>
            <Text style={styles.infoItem}><MaterialCommunityIcons name="account-group" size={14} /> 12/15</Text>
          </View>

          <TouchableOpacity style={styles.cancelBtn}>
            <Text style={styles.cancelBtnText}>Cancel·lar Reserva</Text>
          </TouchableOpacity>
        </View>

        {/* ACCIONS RÀPIDES */}
        <Text style={[styles.sectionTitle, { marginTop: 20, marginLeft: 20 }]}>Accions ràpides</Text>
        <View style={styles.quickActions}>
          <View style={styles.actionCardWhite}>
            <View style={styles.actionIconGray}><MaterialCommunityIcons name="calendar-clock" size={24} color="#333" /></View>
            <Text style={styles.actionTitle}>Horaris</Text>
            <Text style={styles.actionSub}>Veure horaris</Text>
          </View>
          <View style={styles.actionCardRed}>
            <View style={styles.actionIconWhite}><MaterialCommunityIcons name="plus" size={24} color="#ff6b6b" /></View>
            <Text style={styles.actionTitleWhite}>Reserva</Text>
            <Text style={styles.actionSubWhite}>Reserva una classe</Text>
          </View>
        </View>

      </ScrollView>

      {/* NAVBAR INFERIOR */}
      <View style={styles.navbar}>
        <MaterialCommunityIcons name="home" size={28} color="#ff6b6b" />
        <MaterialCommunityIcons name="calendar" size={28} color="#999" />
        <MaterialCommunityIcons name="chart-bar" size={28} color="#999" />
        <MaterialCommunityIcons name="account" size={28} color="#999" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f2f5' },
  header: {
    backgroundColor: '#1a222e',
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  welcomeText: { 
    color: '#888', 
    fontSize: 14 
  },

  userName: { 
    color: '#fff', 
    fontSize: 22, 
    fontWeight: 'bold' 
  },

  profilePic: { 
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    borderWidth: 2, 
    borderColor: '#ff6b6b' 
  },

  reservesBtn: {
    backgroundColor: '#ff6b6b',
    margin: 20,
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5, // Ombra en Android
    shadowColor: '#ff6b6b', // Ombra en iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },

  iconContainer: { 
    backgroundColor: '#fff', 
    padding: 8, 
    borderRadius: 10, 
    marginRight: 15 },

  reservesBtnText: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 16 
  },

  sectionHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingHorizontal: 20, 
    marginTop: 10, 
    alignItems: 'center' 
  },

  sectionTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#1a222e' 
  },

  sectionLink: { 
    color: '#ff6b6b', 
    fontSize: 12 
  },

  chartPlaceholder: { 
    backgroundColor: '#fff', 
    height: 200, 
    margin: 20, 
    borderRadius: 20, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },

  classCard: {
    backgroundColor: '#1a222e',
    margin: 20,
    borderRadius: 25,
    padding: 20
  },

  classHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between' 
  },

  tag: { 
    backgroundColor: '#3d2b30', 
    paddingHorizontal: 10, 
    paddingVertical: 4, 
    borderRadius: 8 
  },

  tagText: { color: '#ff6b6b', 
    fontSize: 10, 
    fontWeight: 'bold' 
  },

  timeBadge: { 
    backgroundColor: '#323a45', 
    padding: 8, 
    borderRadius: 12 
  },

  timeText: { 
    color: '#fff', 
    fontWeight: 'bold' 
  },

  className: { 
    color: '#fff', 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginTop: 10 
  },

  instructor: { 
    color: '#aaa', 
    marginBottom: 15 
  },

  classInfoRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 20 
  },

  infoItem: { 
    color: '#fff', 
    fontSize: 12 
  },

  cancelBtn: { 
    backgroundColor: '#ff6b6b', 
    padding: 15, 
    borderRadius: 12, 
    alignItems: 'center' 
  },

  cancelBtnText: { 
    color: '#fff', 
    fontWeight: 'bold' 
  },

  quickActions: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    padding: 20 
  },

  actionCardWhite: { 
    backgroundColor: '#fff', 
    width: '48%', 
    borderRadius: 20, 
    padding: 20, 
    elevation: 2 
  },

  actionCardRed: { 
    backgroundColor: '#ff6b6b', 
    width: '48%', 
    borderRadius: 20, 
    padding: 20, 
    elevation: 5 
  },

  actionIconGray: { 
    backgroundColor: '#f0f2f5', 
    width: 40, 
    height: 40, 
    borderRadius: 10, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 10 
  },

  actionIconWhite: { 
    backgroundColor: 'rgba(255,255,255,0.3)', 
    width: 40, 
    height: 40, 
    borderRadius: 10, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 10 
  },

  actionTitle: { 
    fontWeight: 'bold', 
    color: '#1a222e' 
  },

  actionSub: { 
    fontSize: 11, 
    color: '#999' 
  },

  actionTitleWhite: { 
    fontWeight: 'bold', 
    color: '#fff' 
  },

  actionSubWhite: { 
    fontSize: 11, 
    color: '#f0f0f0' 
  },

  navbar: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    paddingVertical: 15, 
    backgroundColor: '#fff', 
    borderTopWidth: 1, 
    borderColor: '#eee' 
  }
  
});