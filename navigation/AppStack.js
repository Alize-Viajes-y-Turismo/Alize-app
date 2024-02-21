import { createNativeStackNavigator } from "@react-navigation/native-stack"

import TabNavigator from './TabNavigatior';
import InicioSesionPantalla from '../screens/InicioSesionPantalla';
import RecuperarContraseñaPantalla from '../screens/RecuperarContraseñaPantalla';
import RegistroPantalla from '../screens/RegistroPantalla';

const Stack = createNativeStackNavigator()

function AppStack() {
    return (
        <Stack.Navigator initialRouteName="TabNavigator" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
        </Stack.Navigator>
    )
}

export default AppStack