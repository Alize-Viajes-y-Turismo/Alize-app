import AuthTab from './AuthTab.js';
import AppTab from './AppTab.js';
import { useAuth } from '../auth/authentication';

<<<<<<< HEAD
=======
//screens
import NotAuthHomeScreen from '../screens/NotAuthHomeScreen';
import AyudaScreen from '../screens/AyudaScreen';
import ViajeScreen from '../screens/ViajeScreen';
import IniciarSesionScreen from "../screens/IniciarSesionScreen"
import HomeScreen from '../screens/HomeScreen';
import RegistroScreen from '../screens/RegistroScreen';



import { AuthContext } from '../auth/AuthContext';


const Tab = createBottomTabNavigator();
>>>>>>> 19f2289 (Mudando las screens del stack al tab navigator)


function TabNavigator() {

    const { authData } = useAuth()

    return (
<<<<<<< HEAD
<<<<<<< HEAD
        <>
            {authData ? <AppTab /> : <AuthTab />}
        </>

=======
        <Tab.Navigator screenOptions={screenOptions}>
=======
        <Tab.Navigator screenOptions={screenOptions} initialRouteName='NotAuthHome'>
>>>>>>> 30c8cdc (agregando initialRoute al Tab.Navigator)
            <Tab.Screen 
                name = "NotAuthHomeScreen"
                component = {NotAuthHomeScreen}
                options={options.bienvenida} 
            />
            <Tab.Screen 
                name="AyudaScreen" 
                component={AyudaScreen} 
                options={options.soporte} 
            />
            <Tab.Screen 
                name="ViajeScreen" 
                component={ViajeScreen} 
                options={options.viaje}  
            />
            <Tab.Screen 
                name="IniciarSesionScreen" 
                component={IniciarSesionScreen} 
                options={options.viaje}  
            />
            <Tab.Screen 
                name="RegistroScreen" 
                component={RegistroScreen} 
                options={options.viaje}  
            />
            <Tab.Screen 
                name="HomeScreen" 
                component={HomeScreen} 
                options={options.viaje}  
            />
        </Tab.Navigator>
>>>>>>> 19f2289 (Mudando las screens del stack al tab navigator)
    )
};

export default TabNavigator;

