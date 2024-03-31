import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:8080',
});

export const handleLogin = async (data: { email: string; password: string }) => {
    try {
        const response = await api.post('/login', data);
        console.log(response.data);
        
        // If login is successful, save the user's email to AsyncStorage
        if (response.status === 200) {
            await AsyncStorage.setItem('@user:email', data.email);
        }

        return response.status === 200;
    } catch (error) {
        console.error(error);
        return false;
    }
}
