import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import tabNavigatorOptions from './tabNavigatorOptions';
import tabScreenOptions from './tabScreenOptions';

//screens
import AyudaScreen from '../../screens/AyudaScreen';
import ViajeScreen from '../../screens/ViajeScreen';
import HomeScreen from '../../screens/HomeScreen';


const Tab = createBottomTabNavigator();

function AppTabNAvigator() {

    return (
        <Tab.Navigator screenOptions={tabNavigatorOptions.screenOptions} initialRouteName='HomeScreen'>
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
    )
};

export default AppTabNAvigator;
