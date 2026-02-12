// components/QRModal.jsx
import React, { useEffect } from 'react';
import { Modal, View, Text, Pressable, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import QRCode from 'react-native-qrcode-svg';

const QRModal = ({ visible, onClose, qrData, className, classTime, onScanSuccess, onSimulateScan }) => {
    
    useEffect(() => {
        if (visible && onScanSuccess) {
            const timer = setTimeout(() => {
                onClose();
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [visible, onScanSuccess]);

    return (
        <Modal
            transparent={true}
            visible={visible}
            animationType="fade"
            onRequestClose={onClose}
        >
            <TouchableOpacity 
                style={{
                    flex: 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 20,
                }}
                activeOpacity={1}
                onPress={onClose}
            >
                <View style={{
                    backgroundColor: '#1F2937',
                    borderRadius: 24,
                    padding: 24,
                    width: '90%',
                    maxWidth: 400,
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: '#374151',
                }}>
                    <View style={{
                        backgroundColor: 'rgba(59, 130, 246, 0.15)',
                        padding: 16,
                        borderRadius: 50,
                        marginBottom: 16,
                    }}>
                        <MaterialCommunityIcons name="qrcode-scan" size={40} color="#3b82f6" />
                    </View>

                    <Text style={{
                        color: '#fff',
                        fontSize: 22,
                        fontWeight: '700',
                        marginBottom: 8,
                        textAlign: 'center',
                    }}>
                        {className}
                    </Text>

                    <Text style={{
                        color: '#9CA3AF',
                        fontSize: 16,
                        marginBottom: 20,
                        textAlign: 'center',
                    }}>
                        {classTime}
                    </Text>

                    <View style={{
                        backgroundColor: '#111827',
                        padding: 20,
                        borderRadius: 16,
                        marginBottom: 20,
                        borderWidth: 1,
                        borderColor: '#374151',
                    }}>
                        <QRCode
                            value={qrData}
                            size={220}
                            color="white"
                            backgroundColor="#111827"
                        />
                    </View>

                    {onScanSuccess ? (
                        <View style={{
                            backgroundColor: 'rgba(16, 185, 129, 0.15)',
                            paddingVertical: 12,
                            paddingHorizontal: 20,
                            borderRadius: 10,
                            marginBottom: 12,
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 8,
                            width: '100%',
                            justifyContent: 'center',
                        }}>
                            <MaterialCommunityIcons name="check-circle" size={18} color="#10B981" />
                            <Text style={{ color: '#10B981', fontSize: 14, fontWeight: '600' }}>
                                QR registrat! Tancant...
                            </Text>
                        </View>
                    ) : (
                        onSimulateScan && (
                            <Pressable
                                onPress={onSimulateScan}
                                style={{
                                    backgroundColor: '#4B5563',
                                    paddingVertical: 12,
                                    paddingHorizontal: 20,
                                    borderRadius: 10,
                                    marginBottom: 12,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: 8,
                                    width: '100%',
                                    justifyContent: 'center',
                                }}
                            >
                                <MaterialCommunityIcons name="qrcode" size={18} color="#fff" />
                                <Text style={{ color: '#fff', fontSize: 14, fontWeight: '600' }}>
                                    Simular escàner (Postman)
                                </Text>
                            </Pressable>
                        )
                    )}

                    <Pressable
                        onPress={onClose}
                        style={{
                            backgroundColor: '#3b82f6',
                            paddingVertical: 14,
                            paddingHorizontal: 30,
                            borderRadius: 14,
                            width: '100%',
                            alignItems: 'center',
                        }}
                    >
                        <Text style={{
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: '700',
                        }}>
                            Tancar
                        </Text>
                    </Pressable>
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

export default QRModal;