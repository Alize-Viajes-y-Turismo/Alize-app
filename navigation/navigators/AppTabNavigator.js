import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import screenOptions from './screenOptions';

//screens
import AyudaScreen from '../../screens/AyudaScreen';
import ViajeScreen from '../../screens/ViajeScreen';
import HomeScreen from '../../screens/HomeScreen';


const Tab = createBottomTabNavigator();

function AppTabNAvigator() {

    return (
        <Tab.Navigator screenOptions={screenOptions.global} initialRouteName='HomeScreen'>
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={screenOptions.Home}
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

export default AppTabNAvigator;
