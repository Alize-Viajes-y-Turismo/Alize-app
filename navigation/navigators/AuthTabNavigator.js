// Import screen options configuration from './screenOptions'
import screenOptions from './screenOptions';

// Import React Navigation's Tab Navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import screens to be displayed in the tabs
import HomeScreen from '../../screens/HomeScreen';
import SupportScreen from '../../screens/SupportScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import UpdateNameScreen from '../../screens/UpdateNameScreen';
import UpdatePasswordScreen from '../../screens/UpdatePasswordScreen';
import MyTravelsScreen from '../../screens/MyTravelsScreen';
import TripDetailsScreen from '../../screens/TripDetailsScreen.jsx'; // Changed here
import TripScreen from '../../screens/TripScreen.jsx';

// Create the Tab Navigator
const Tab = createBottomTabNavigator();

// Define the Tab Navigator component
function AuthTabNavigator() {
    return (
        <Tab.Navigator screenOptions={screenOptions.global} initialRouteName='HomeScreen'>
            {/* Define each tab with its name, component, and options */}
            <Tab.Screen 
                name="HomeScreen"
                component={HomeScreen}
                options={screenOptions.HomeScreen} 
            />
            <Tab.Screen 
                name="SupportScreen" 
                component={SupportScreen} 
                options={screenOptions.Ayuda} 
            />
            <Tab.Screen 
                name="ProfileScreen" 
                component={ProfileScreen} 
                options={screenOptions.ProfileScreen}
            />
            <Tab.Screen 
                name="UpdateNameScreen" 
                component={UpdateNameScreen} 
                options={screenOptions.UpdateNameScreen}
            />
            <Tab.Screen 
                name="UpdatePasswordScreen" 
                component={UpdatePasswordScreen} 
                options={screenOptions.UpdatePasswordScreen}
            />
            <Tab.Screen 
                name="MyTravelsScreen" 
                component={MyTravelsScreen} 
                options={screenOptions.MyTravelsScreen}
            />
            <Tab.Screen 
                name="TripDetailsScreen" // Changed here
                component={TripDetailsScreen} // Changed here
                options={screenOptions.TripDetailsScreen} // Changed here
            />
            <Tab.Screen 
                name="TripScreen" // Added here
                component={TripScreen} // Added here
                options={screenOptions.TripScreen} // Added here
            />
        </Tab.Navigator>
    );
}

export default AuthTabNavigator; // Export the Tab Navigator component
