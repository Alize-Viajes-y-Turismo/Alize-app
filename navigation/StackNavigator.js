import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Platform, StatusBar} from 'react-native';

//screens
import TabNavigator from './TabNavigatior';
import InicioSesionPantalla from '../screens/InicioSesionPantalla';
import RecuperarContraseñaPantalla from '../screens/RecuperarContraseñaPantalla';
import RegistroPantalla from '../screens/RegistroPantalla';

const Stack = createNativeStackNavigator();

function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="TabNavigator" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="TabNavigator" component={TabNavigator} />
                <Stack.Screen name="InicioSesion" component={InicioSesionPantalla} />
                <Stack.Screen name="RecuperarContraseñaPantalla" component={RecuperarContraseñaPantalla} />
                <Stack.Screen name="RegistroPantalla" component={RegistroPantalla} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator

//OPCIONES----------------------------------------------------

const styles = StyleSheet.create({
    navigatorContainer: {
      borderRadius: 20,
      flex: 1,
    },
    container: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    header: {
      flex: 0.2,
      alignItems: 'center',
    },
    imagenColectivo: {
      width: '70%',
      height: '40%',
      borderRadius: 20,
      marginBottom: 50,  // Puedes ajustar la propiedad de redimensionamiento según tus necesidades
    },
    tab: {
      backgroundColor: 'red',
    }
  });