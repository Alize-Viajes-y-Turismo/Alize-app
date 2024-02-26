import { NativeModules } from 'react-native';
import { CryptoJS } from 'crypto-js';
import { AsyncStorage } from '@react-native-async-storage/async-storage';

const { KeyStoreModule } = NativeModules;

const encryptAndStoreToken = async (token) => {
    try {
        
        const key = await KeyStoreModule.generateKey();

        const encryptedToken = CryptoJS.AES.encrypt(token, key).toString();

        const expirationTime = Date.now() + (2 * 60 * 60 * 1000);

        await AsyncStorage.setItem('encryptedToken', JSON.stringify({ value: encryptedToken, expirationTime }));

    } catch (error) {

        console.error('Error al cifrar y guardar el token:', error);

    }
}

export default encryptAndStoreToken;
