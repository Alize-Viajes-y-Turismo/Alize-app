import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const screenOptions = {

    global: {
        tabBarActiveTintColor: '#FC3232',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
            margin: 20, // Margen horizontal
            height: 80,
            borderRadius: 20,
            justifyContent: 'center'
        },
    },

    Home: {
        tabBarIcon: ({color, size}) => (<FontAwesome6 name="user" size={size} color={color} />),
        tabBarLabel: ''
    },

    NotAuthHome: {
        tabBarIcon: ({color, size}) => (<FontAwesome6 name="user" size={size} color={color} />),
        tabBarLabel: 'Home'
    },
    Ayuda: {
        tabBarIcon: ({color, size}) => (<AntDesign name="message1" size={30} color={"#FA323"} />),
        tabBarLabel: 'Ayuda'
    },
    Viaje: {
        tabBarIcon: ({color, size}) => (<FontAwesome name="search" size={30} color={"#FA323"} />),
        tabBarLabel: 'Viaje'
    },

    IniciarSesion: {
        tabBarButton: () => null,
    },

    Registro: {
        tabBarButton: () => null,
    }

}

export default screenOptions