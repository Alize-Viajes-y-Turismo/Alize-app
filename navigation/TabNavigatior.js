
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen 
                name="Iniciar Sesion" 
                component={auth ? algo : InicioPantalla} 
                options={iniciarSesionOptions} 
            />
            <Tab.Screen 
                name="Ayuda" 
                component={SoportePantalla} 
                options={ayudaOptions} 
            />
            <Tab.Screen 
                name="Viaje" 
                component={SacaTuPasaje} 
                options={viajeOptions}  
            />
            <Tab.Screen 
                name="Viaje" 
                component={SacaTuPasaje} 
                options={viajeOptions}  
            />
        </Tab.Navigator>
    )
};

export default TabNavigator;

//OPCIONES-------------------------------------------------------------------

const options = {
    iniciarSesionOptions: {
        tabBarIcon: ({ color, size }) => (<FontAwesome6 name="user" size={size} color={color} />),
        tabBarLabel: '', // Oculta el texto
    },
    ayudaOptions: {
        tabBarIcon: ({ color, size }) => (<AntDesign name="message1" size={size} color={color} />),
        tabBarLabel: '', // Oculta el texto
    },
    viajeOptions: {
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