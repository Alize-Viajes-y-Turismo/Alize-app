import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import TabNavigator from './TabNavigatior';


const Stack = createNativeStackNavigator();

function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="TabNavigator" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="TabNavigator" component={TabNavigator} />
                <Stack.Screen name="IniciarSesion" component={IniciarSesion} />
                <Stack.Screen name="InicioPantalla" component={InicioPantalla} />
                <Stack.Screen name="RecuperarContraseñaPantalla" component={RecuperarContraseñaPantalla} />
                <Stack.Screen name="RegistrarCuentaPantalla" component={RegistrarCuentaPantalla} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator