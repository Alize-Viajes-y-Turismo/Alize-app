//screenOptions
import screenOptions from './screenOptions';

//Tab Navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import HomeScreen from '../../screens/HomeScreen';
import AyudaScreen from '../../screens/AyudaScreen';
import ViajeScreen from '../../screens/ViajeScreen';


const Tab = createBottomTabNavigator();

function AppTabNavigator() {

    return (
        <Tab.Navigator screenOptions = {screenOptions.global} initialRouteName='HomeScreen'>
            <Tab.Screen 
                name = "HomeScreen"
                component = {HomeScreen}
                options={screenOptions.NotAuthHome} 
            />
            <Tab.Screen 
                name="AyudaScreen" 
                component={AyudaScreen} 
                options={screenOptions.Ayuda} 
            />
            <Tab.Screen 
                name="ViajeScreen" 
                component={ViajeScreen} 
                options={screenOptions.Viaje}
            />
            
        </Tab.Navigator>
    )
};

export default AppTabNavigator;