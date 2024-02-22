import AuthTab from './AuthTab.js';
import AppTab from './AppTab.js';
import { useAuth } from '../auth/authentication';

<<<<<<< HEAD
=======
//screens
import AyudaScreen from '../screens/AyudaScreen';
import ViajeScreen from '../screens/ViajeScreen';
import HomeScreen from '../screens/HomeScreen';



import { AuthContext } from '../auth/AuthContext';


const Tab = createBottomTabNavigator();
>>>>>>> 19f2289 (Mudando las screens del stack al tab navigator)


function TabNavigator() {

    const { authData } = useAuth()

    return (
<<<<<<< HEAD
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
=======
        <Tab.Navigator screenOptions={screenOptions} initialRouteName='HomeScreen'>
>>>>>>> 40c087f (eliminando las screens de AppTabNavigation que no deben estar ahi, lo mismo con AuthTabNavigator, y modificando el initialRouteName)
            <Tab.Screen 
                name="HomeScreen" 
                component={HomeScreen} 
                options={options.viaje}  
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
        </Tab.Navigator>
>>>>>>> 19f2289 (Mudando las screens del stack al tab navigator)
    )
};

export default TabNavigator;

