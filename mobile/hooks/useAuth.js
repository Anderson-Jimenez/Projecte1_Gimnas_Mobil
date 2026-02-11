import { useEffect, useState } from 'react';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useAuth() {
  const [isLoading, setIsLoading] = useState(true);
  const BACKEND_URL = "http://192.168.1.20:8000"; //tu ip de la maquina

  useEffect(() => {
    verificarAuth();
  }, []);

  const verificarAuth = async () => {
    try {
      const token = await AsyncStorage.getItem('token'); //agarra el token guardado actualmente
      
      if (!token) {
        //si no hay token, se redirige al login
        router.replace('/login'); 
        setIsLoading(false);
        return;
      }

      const response = await fetch(`${BACKEND_URL}/api/verify-token`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        await AsyncStorage.removeItem('token');
        router.replace('/login');
      }
    } catch (error) {
      console.error('Error:', error);
      router.replace('/login');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        await fetch(`${BACKEND_URL}/api/logout`, {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${token}` }
        });
      }
    } 
    catch (error) {
      console.error('Error logout:', error);
    } 
    finally {
      await AsyncStorage.removeItem('token');
      router.replace('/login');
    }
  };

  return { isLoading, logout };
}