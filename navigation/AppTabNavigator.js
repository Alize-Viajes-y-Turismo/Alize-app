<<<<<<< HEAD
import AuthTab from './AuthTab.js';
import AppTab from './AppTab.js';
import { useAuth } from '../auth/authentication';
=======
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useContext } from 'react';
import tabNavigatorOptions from './tabNavigatorOptions';
import tabScreenOptions from './tabScreenOptions';
>>>>>>> 4c587ba (trasladando las opciones del tabNavigator y sus screens a dos archivos aparte)

<<<<<<< HEAD
=======
//screens
import AyudaScreen from '../screens/AyudaScreen';
import ViajeScreen from '../screens/ViajeScreen';
import HomeScreen from '../screens/HomeScreen';



import { AuthContext } from '../auth/AuthContext';


const Tab = createBottomTabNavigator();
>>>>>>> 19f2289 (Mudando las screens del stack al tab navigator)


function AppTabNAvigator() {

    const { authData } = useAuth()

    return (
<<<<<<< HEAD
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
=======
        <Tab.Navigator screenOptions={tabNavigatorOptions.screenOptions} initialRouteName='HomeScreen'>
>>>>>>> 4c587ba (trasladando las opciones del tabNavigator y sus screens a dos archivos aparte)
            <Tab.Screen 
                name="HomeScreen" 
                component={HomeScreen} 
                options={tabScreenOptions.HomeScreen}  
            />
            <Tab.Screen 
                name="AyudaScreen" 
                component={AyudaScreen} 
                options={tabScreenOptions.AyudaScreen} 
            />
            <Tab.Screen 
                name="ViajeScreen" 
                component={ViajeScreen} 
                options={tabNavigatorOptions.ViajeScreen}  
            />
        </Tab.Navigator>
>>>>>>> 19f2289 (Mudando las screens del stack al tab navigator)
    )
};

<<<<<<< HEAD
<<<<<<< HEAD
export default TabNavigator;

=======
export default TabNavigator;
>>>>>>> 4c587ba (trasladando las opciones del tabNavigator y sus screens a dos archivos aparte)
=======
export default AppTabNAvigator;
>>>>>>> aee487f (creando el archivo Router.js y arreglando nombre a las funciones AppTabNavigator y AuthTabNavigatot (ambas tenian el nombre TabNavigator))
