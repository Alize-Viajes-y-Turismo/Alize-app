import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useContext } from 'react';

//screens
import BienvenidaPantalla from '../screens/BienvenidaPantalla';
import SoportePantalla from '../screens/SoportePantalla';
import PasajesPantalla from '../screens/PasajesPantalla';

import { AuthContext } from '../auth/AuthContext';


const Tab = createBottomTabNavigator();


function TabNavigator() {

    const {auth} = useContext(AuthContext)

    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen 
                name= {auth ? "Perfil" : "Bienvenida"}
                component={auth ? PerfilPantalla : BienvenidaPantalla} 
                options={options.bienvenida} 
            />
            <Tab.Screen 
                name="Ayuda" 
                component={SoportePantalla} 
                options={options.soporte} 
            />
            <Tab.Screen 
                name="Viaje" 
                component={PasajesPantalla} 
                options={options.viaje}  
            />
        </Tab.Navigator>
    )
};

export default TabNavigator;

//OPCIONES-------------------------------------------------------------------

const options = {
    bienvenida: {
        tabBarIcon: ({ color, size }) => (<FontAwesome6 name="user" size={size} color={color} />),
        tabBarLabel: '', // Oculta el texto
    },
    soporte: {
        tabBarIcon: ({ color, size }) => (<AntDesign name="message1" size={size} color={color} />),
        tabBarLabel: '', // Oculta el texto
    },
    viaje: {
        tabBarIcon: ({ color, size }) => (<FontAwesome name="search" size={size} color={color} />),
        tabBarLabel: '', // Oculta el texto
    }
}

const screenOptions = ({ route }) => ({
    tabBarActiveTintColor: '#FC3232',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: {
        margin: 20, // Margen horizontal
        height: 80,
        borderRadius: 20,
        justifyContent: 'center'
    },
    tabBarIcon: ({ color }) => screenOptions(route, color),
})