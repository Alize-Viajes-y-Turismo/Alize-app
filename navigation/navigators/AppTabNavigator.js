<<<<<<< HEAD
import AuthTab from './AuthTab.js';
import AppTab from './AppTab.js';
import { useAuth } from '../auth/authentication';
=======
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
<<<<<<< HEAD
import { useContext } from 'react';
<<<<<<< HEAD:navigation/AppTabNavigator.js
import tabNavigatorOptions from './tabNavigatorOptions';
import tabScreenOptions from './tabScreenOptions';
>>>>>>> 4c587ba (trasladando las opciones del tabNavigator y sus screens a dos archivos aparte)
=======
=======
>>>>>>> 783abfe (eliminando el hook useContext de los archivos AppTabNavigator y AuthTabNavigator)
import tabNavigatorOptions from '../options/tabNavigatorOptions';
import tabScreenOptions from '../options/tabScreenOptions';
>>>>>>> 074968d (agregando carpetas: navigators y options adentro de carpeta navigation):navigation/navigators/AppTabNavigator.js

<<<<<<< HEAD
=======
//screens
import AyudaScreen from '../../screens/AyudaScreen';
import ViajeScreen from '../../screens/ViajeScreen';
import HomeScreen from '../../screens/HomeScreen';


const Tab = createBottomTabNavigator();
>>>>>>> 19f2289 (Mudando las screens del stack al tab navigator)


function AppTabNAvigator() {

<<<<<<< HEAD
    const { authData } = useAuth()

=======
>>>>>>> 783abfe (eliminando el hook useContext de los archivos AppTabNavigator y AuthTabNavigator)
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
