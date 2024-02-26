import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const screenOptions = {

    global: {
        headerShown: false,
        tabBarActiveTintColor: '#FC3232',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
            margin: 10, // Margen horizontal
            height: 80,
            borderRadius: 30,
            alignItems: 'center', // Para centrar verticalmente los iconos
            justifyContent: 'center',
           
        },
    },

    Home: {
        tabBarIcon: ({ color, size }) => (<FontAwesome6 name="user" size={size} color={color} />),
        tabBarLabel: '',
        tabBarActiveTintColor: '#FC3232',
        tabBarInactiveTintColor: 'gray',

    },

    NotAuthHome: {
        tabBarIcon: ({ color, size }) => (<FontAwesome6 name="user" size={size} color={color} />),
        tabBarLabel: '',
        title: "Inicio",
        headerTitleAlign: "center",
        tabBarActiveTintColor: '#FC3232',
        tabBarInactiveTintColor: 'gray',
    },
    Ayuda: {
        tabBarIcon: ({ color, size }) => (<AntDesign name="message1" size={30} color={color} />),
        tabBarLabel: '',
        title: "Ayuda",
        headerTitleAlign: "center"
    },
    Viaje: {
        tabBarIcon: ({ color, size }) => (<FontAwesome name="search" size={30} color={color} />),
        tabBarLabel: '',
        title: "Viaje",
        headerTitleAlign: "center"
    },

    IniciarSesion: {
        tabBarButton: () => null,
        title: "",
    },

    Registro: {
        tabBarButton: () => null,
        title: ""
    },

    RecuperarContraseña: {
        tabBarButton: () => null,
        title: ""
    }

}

export default screenOptions