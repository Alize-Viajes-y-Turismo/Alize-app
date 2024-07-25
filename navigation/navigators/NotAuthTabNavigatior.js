// Importa la configuración de las opciones de pantalla desde './screenOptions'
import screenOptions from './screenOptions';

// Importa el Tab Navigator de React Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importa las pantallas que se mostrarán en las pestañas
import NotAuthHomeScreen from '../../screens/NotAuthHomeScreen';
import SupportScreen from '../../screens/SupportScreen.jsx';
import LoginScreen from '../../screens/LoginScreen.jsx';
import RegisterScreen from '../../screens/RegisterScreen.jsx';
import VerificationCodeScreen from '../../screens/VerificationCodeScreen.jsx';
import PreRecoveryPasswordScreen from '../../screens/PreRecoveryPasswordScreen.jsx';
import RecoveryPasswordScreen from '../../screens/RecoveryPasswordScreen.jsx';

const Tab = createBottomTabNavigator();

// Define el componente del Tab Navigator
function NotAuthTabNavigator() {
    return (
        <Tab.Navigator screenOptions={screenOptions.global} initialRouteName='NotAuthHomeScreen'>
            {/* Define cada pestaña con su nombre, componente y opciones */}
            <Tab.Screen 
                name="NotAuthHomeScreen"
                component={NotAuthHomeScreen}
                options={screenOptions.NotAuthHomeScreen} 
            />
            <Tab.Screen 
                name="SupportScreen" 
                component={SupportScreen} 
                options={screenOptions.SupportScreen} 
            />
            <Tab.Screen 
                name="LoginScreen" 
                component={LoginScreen} 
                options={screenOptions.LoginScreen}
            />
            <Tab.Screen 
                name="RegisterScreen" 
                component={RegisterScreen} 
                options={screenOptions.RegisterScreen}
            />
            <Tab.Screen 
                name="PreRecoveryPasswordScreen" 
                component={PreRecoveryPasswordScreen} 
                options={screenOptions.PreRecoveryPasswordScreen}
            />
            <Tab.Screen 
                name="VerificationCodeScreen" 
                component={VerificationCodeScreen} 
                options={screenOptions.VerificationCodeScreen}
            />
            <Tab.Screen 
                name="RecoveryPasswordScreen"
                component={RecoveryPasswordScreen}
                options={screenOptions.RecoveryPasswordScreen}
            />
        </Tab.Navigator>
    );
}

export default NotAuthTabNavigator; // Exporta el componente del Tab Navigator