//screenOptions
import screenOptions from './screenOptions';

//Tab Navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import Home from '../../user-interface/screens/Home';
import Support from '../../user-interface/screens/Support';
import Journey from '../../user-interface/screens/Journey';
import Login from "../../user-interface/screens/Login"
import Register from '../../user-interface/screens/Register';
import Recovery from '../../user-interface/screens/Recovery';
import RegisterVerify from '../../user-interface/screens/RecoveryVerify';
import Prueba from '../../user-interface/screens/Prueba';


const Tab = createBottomTabNavigator();

function AuthTabNavigator() {

    return (
        <Tab.Navigator screenOptions = {screenOptions.global} initialRouteName='NotAuthHomeScreen'>
            <Tab.Screen 
                name = "Home"
                component = {Home}
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
            <Tab.Screen 
                name="Login"
                component={Login} 
                options = {screenOptions.IniciarSesion}
            />
            <Tab.Screen 
                name="Register" 
                component={Register} 
                options={screenOptions.Registro}
            />
            <Tab.Screen 
                name="Recovery" 
                component={Recovery} 
                options={screenOptions.RecuperarContraseña}
            />
            <Tab.Screen 
                name="RegisterVerify" 
                component={RegisterVerify} 
                options={screenOptions.RecuperarContraseña}
            />
               <Tab.Screen 
                name="Prueba" 
                component={Prueba} 
                options={screenOptions.Viaje}
            />
        </Tab.Navigator>
    )
};

export default AuthTabNavigator;