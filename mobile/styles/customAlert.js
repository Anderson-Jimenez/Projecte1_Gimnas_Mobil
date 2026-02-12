import React, { useEffect, useRef } from 'react';
import { Modal, View, Text, TouchableOpacity, Animated } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import alertStyles from './alertStyles'; // Ajusta la ruta según tu estructura

const CustomAlert = ({ visible, titulo, mensaje, tipo, onClose }) => {
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.spring(scaleValue, {
        toValue: 1,
        damping: 15,
        mass: 0.9,
        useNativeDriver: true,
      }).start();

      // Auto-cerrar después de 3 segundos si es éxito
      if (tipo === 'success') {
        const timer = setTimeout(() => {
          onClose();
        }, 3000);
        return () => clearTimeout(timer);
      }
    } else {
      scaleValue.setValue(0);
    }
  }, [visible]);

  const getConfig = () => {
    switch(tipo) {
      case 'success':
        return {
          icon: 'check-circle',
          color: '#4CAF50',
          bgColor: '#E8F5E9',
          titulo: '¡Reserva exitosa!'
        };
      case 'error':
        return {
          icon: 'alert-circle',
          color: '#F44336',
          bgColor: '#FFEBEE',
          titulo: 'Error en la reserva'
        };
      case 'warning':
        return {
          icon: 'alert',
          color: '#FF9800',
          bgColor: '#FFF3E0',
          titulo: 'Atención'
        };
      default:
        return {
          icon: 'information',
          color: '#2196F3',
          bgColor: '#E3F2FD',
          titulo: 'Información'
        };
    }
  };

  const config = getConfig();

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity 
        style={alertStyles.modalOverlay} 
        activeOpacity={1} 
        onPress={onClose}
      >
        <Animated.View 
          style={[
            alertStyles.modalContent,
            {
              transform: [{ scale: scaleValue }],
              backgroundColor: config.bgColor,
              borderLeftWidth: 5,
              borderLeftColor: config.color
            }
          ]}
        >
          <View style={alertStyles.iconContainer}>
            <MaterialCommunityIcons 
              name={config.icon} 
              size={50} 
              color={config.color} 
            />
          </View>
          
          <View style={alertStyles.textContainer}>
            <Text style={[alertStyles.titulo, { color: config.color }]}>
              {titulo || config.titulo}
            </Text>
            <Text style={alertStyles.mensaje}>
              {mensaje}
            </Text>
          </View>

          {tipo === 'error' && (
            <TouchableOpacity 
              style={[alertStyles.button, { backgroundColor: config.color }]} 
              onPress={onClose}
            >
              <Text style={alertStyles.buttonText}>Aceptar</Text>
            </TouchableOpacity>
          )}
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
};

export default CustomAlert;