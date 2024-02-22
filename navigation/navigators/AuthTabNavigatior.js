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
                options={screenOptions.Ayda} 
            />
            <Tab.Screen 
                name="ViajeScreen" 
                component={ViajeScreen} 
                options={screenOptions.Viaje}
            />
            <Tab.Screen 
                name="IniciarSesionScreen" 
                component={IniciarSesionScreen} 
            />
            <Tab.Screen 
                name="RegistroScreen" 
                component={RegistroScreen} 
            />
        </Tab.Navigator>
    )
};

export default AuthTabNavigator;