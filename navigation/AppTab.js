import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import PerfilPantalla from "../screens/PerfilPantalla"
import SoportePantalla from "../screens/SoportePantalla"
import PasajesPantalla from "../screens/PasajesPantalla"


const Tab = createBottomTabNavigator()

function AppTab() {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name="Perfil"
                component={PerfilPantalla}
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
}

export default AppTab

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