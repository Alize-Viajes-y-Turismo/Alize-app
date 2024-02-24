import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from '../Tab-Navigation/TabNavigator';
import IniciarSesion from '../screens/InicioSesionPantalla';
import RegistroPantalla from '../screens/RegistroPantalla';
import RecuperarContraseñaPantalla from '../screens/RecuperarContraseñaPantalla';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {

  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: {backgroundColor:'white'} }} initialRouteName={TabNavigator}>
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="RegistroPantalla" component={RegistroPantalla} />
          <Stack.Screen name="IniciarSesion" component={IniciarSesion} />
        <Stack.Screen name="RecuperarContraseñaPantalla" component={RecuperarContraseñaPantalla} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue'
  },
});

export default StackNavigator;