import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const tabScreenOptions = {
    HomeScreen: {
        tabBarIcon: ({ color, size }) => (<FontAwesome6 name="user" size={size} color={color} />),
        tabBarLabel: ''
    },
    NotAuthHomeScreen: {
        tabBarIcon: ({ color, size }) => (<FontAwesome6 name="user" size={size} color={color} />),
        tabBarLabel: ''
    },
    AyudaScreen: {
        tabBarIcon: ({ color, size }) => (<AntDesign name="message1" size={size} color={color} />),
        tabBarLabel: ''
    },
    ViajeScreen: {
        tabBarIcon: ({ color, size }) => (<FontAwesome name="search" size={size} color={color} />),
        tabBarLabel: ''
    }
}

export default tabScreenOptions