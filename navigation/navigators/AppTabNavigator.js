//screenOptions
import screenOptions from './screenOptions';

//Tab Navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import Profile from '../../user-interface/screens/Profile';
import Support from '../../user-interface/screens/Support';
import Journey from '../../user-interface/screens/Journey';


const Tab = createBottomTabNavigator();

function AppTabNavigator() {

    return (
        <Tab.Navigator screenOptions = {screenOptions.global} initialRouteName='HomeScreen'>
            <Tab.Screen 
                name = "Profile"
                component = {Profile}
                options={screenOptions.NotAuthHome} 
            />
            <Tab.Screen 
                name="Support" 
                component={Support} 
                options={screenOptions.Ayuda} 
            />
            <Tab.Screen 
                name="Journey" 
                component={Journey} 
                options={screenOptions.Viaje}
            />
            
        </Tab.Navigator>
    )
};

export default AppTabNavigator;