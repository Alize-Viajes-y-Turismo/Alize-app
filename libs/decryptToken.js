import { NativeModules } from 'react-native';
import { CryptoJS } from 'crypto-js';
import { AsyncStorage } from '@react-native-async-storage/async-storage';

const { KeyStoreModule } = NativeModules;

// Función para verificar el token
const decryptToken = async () => {
    try {

    // Obtener la clave del Android Keystore
    const key = await KeyStoreModule.getKey();

    // Obtener el token cifrado de AsyncStorage
    const encryptedTokenObject = await AsyncStorage.getItem('encryptedToken');
    const encryptedToken = JSON.parse(encryptedTokenObject).value;

    // Descifrar el token utilizando AES y la clave obtenida
    const bytes  = CryptoJS.AES.decrypt(encryptedToken, key);
    const decryptedToken = bytes.toString(CryptoJS.enc.Utf8);

    return decryptedToken;

    } catch (error) {

    console.error('Error al verificar el token:', error);

    }
}

export default { decryptToken };