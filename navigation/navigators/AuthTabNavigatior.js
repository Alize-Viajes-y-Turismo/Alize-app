//screenOptions
import screenOptions from './screenOptions';

//Tab Navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import NotAuthHomeScreen from '../../screens/NotAuthHomeScreen';
import AyudaScreen from '../../screens/AyudaScreen';
import ViajeScreen from '../../screens/ViajeScreen';
import IniciarSesionScreen from "../../screens/IniciarSesionScreen"
import RegistroScreen from '../../screens/RegistroScreen';
import RecuperarContraseñaScreen from '../../screens/RecuperarContraseñaScreen';


const Tab = createBottomTabNavigator();

function AuthTabNavigator() {

    return (
        <Tab.Navigator screenOptions = {screenOptions.global} initialRouteName='NotAuthHomeScreen'>
            <Tab.Screen 
                name = "NotAuthHomeScreen"
                component = {NotAuthHomeScreen}
                options={screenOptions.NotAuthHome} 
            />
            <Tab.Screen 
                name="AyudaScreen" 
                component={AyudaScreen} 
                options={screenOptions.Ayuda} 
            />
            <Tab.Screen 
                name="ViajeScreen" 
                component={ViajeScreen} 
                options={screenOptions.Viaje}
            />
            <Tab.Screen 
                name="IniciarSesionScreen" 
                component={IniciarSesionScreen} 
                options = {screenOptions.IniciarSesion}
            />
            <Tab.Screen 
                name="RegistroScreen" 
                component={RegistroScreen} 
                options={screenOptions.Registro}
            />
            <Tab.Screen 
                name="RecuperarContraseñaScreen" 
                component={RecuperarContraseñaScreen} 
            />
        </Tab.Navigator>
    )
};

export default AuthTabNavigator;