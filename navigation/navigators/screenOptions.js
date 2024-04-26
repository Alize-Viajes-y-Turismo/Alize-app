import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const screenOptions = {
    global: {
        headerShown: false,
        tabBarActiveTintColor: '#FC3232',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
            margin: 10,
            height: 80,
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
        },
        tabBarHideOnKeyboard: true
    },

    HomeScreen: {
        tabBarIcon: ({ color, size }) => (<FontAwesome6 name="user" size={size} color={color} />),
        tabBarLabel: '',
        tabBarActiveTintColor: '#FC3232',
        tabBarInactiveTintColor: 'gray',
    },

    NotAuthHomeScreen: {
        tabBarIcon: ({ color, size }) => (<FontAwesome6 name="user" size={size} color={color} />),
        tabBarLabel: '',
        title: "Inicio",
        headerTitleAlign: "center",
        tabBarActiveTintColor: '#FC3232',
        tabBarInactiveTintColor: 'gray',
    },

    SupportScreen: {
        tabBarIcon: ({ color, size }) => (<AntDesign name="message1" size={30} color={color} />),
        tabBarLabel: '',
        title: "Ayuda",
        headerTitleAlign: "center"
    },

    MyTravelsScreen: {
        tabBarButton: () => null,
        title: ""
    },

    UpdatePasswordScreen: {
        tabBarButton: () => null,
        title: ""
    },

    UpdateNameScreen: {
        tabBarButton: () => null,
        title: ""
    },

    LoginScreen: {
        tabBarButton: () => null,
        title: "",
    },

    RegisterScreen: {
        tabBarButton: () => null,
        title: ""
    },

    PreRecoveryPasswordScreen: {
        tabBarButton: () => null,
        title: ""
    },
    RecoveryPasswordScreen: {
        tabBarButton: () => null,
        title: ""
    },
    VerificationCodeScreen: {
        tabBarButton: () => null,
        title: ""
    },
    ProfileScreen: {
        tabBarButton: () => null,
        title: ""
    },
}

export default screenOptions;