import { createNativeStackNavigator } from "@react-navigation/native-stack"

import TabNavigator from './TabNavigatior';
import InicioSesionPantalla from '../screens/InicioSesionPantalla';
import RecuperarContraseñaPantalla from '../screens/RecuperarContraseñaPantalla';
import RegistroPantalla from '../screens/RegistroPantalla';

const Stack = createNativeStackNavigator()

function AuthStack() {
    return (
        <Stack.Navigator initialRouteName="TabNavigator" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
            <Stack.Screen name="InicioSesion" component={InicioSesionPantalla} />
            <Stack.Screen name="RecuperarContraseñaPantalla" component={RecuperarContraseñaPantalla} />
            <Stack.Screen name="RegistroPantalla" component={RegistroPantalla} />
        </Stack.Navigator>
    )
}

export default AuthStack