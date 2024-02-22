import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useContext } from 'react';
import options from './tabScreenOptions';
import { AuthContext } from '../auth/AuthContext';
import tabNavigatorOptions from './tabNavigatorOptions';


//screens
import NotAuthHomeScreen from '../screens/NotAuthHomeScreen';
import AyudaScreen from '../screens/AyudaScreen';
import ViajeScreen from '../screens/ViajeScreen';
import IniciarSesionScreen from "../screens/IniciarSesionScreen"
import RegistroScreen from '../screens/RegistroScreen';



const Tab = createBottomTabNavigator();


function TabNavigator() {

    const {auth} = useContext(AuthContext)

    return (
        <Tab.Navigator screenOptions={tabNavigatorOptions.screenOptions} initialRouteName='NotAuthHomeScreen'>
            <Tab.Screen 
                name = "NotAuthHomeScreen"
                component = {NotAuthHomeScreen}
                options={options.NotAuthHomeScreen} 
            />
            <Tab.Screen 
                name="AyudaScreen" 
                component={AyudaScreen} 
                options={options.AyudaScreen} 
            />
            <Tab.Screen 
                name="ViajeScreen" 
                component={ViajeScreen} 
                options={options.ViajeScreen}
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

export default TabNavigator;