import { StyleSheet, View, Text, Platform, StatusBar, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import RecuperarContraseñaPantalla from './screens/RecuperarContraseñaPantalla';
import RegistrarCuentaPantalla from './screens/RegistrarCuentaPantalla';
import InicioPantalla from './screens/InicioPantalla';
import SoportePantalla from './screens/SoportePantalla';
import SacaTuPasaje from './screens/PasajesPantalla';
import IniciarSesion from './screens/IniciarSesionPantalla';

export default function App() {

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const TabNavigator = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#FC3232',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          margin: 20, // Margen horizontal
          height: 80,
          borderRadius: 20,
          justifyContent: 'center'
        },
        tabBarIcon: ({ color }) => screenOptions(route, color),
      })}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (<FontAwesome6 name="user" size={size} color={color} />),
          tabBarLabel: '', // Oculta el texto
        }}
        name="Iniciar Sesion"
        component={InicioPantalla} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (<AntDesign name="message1" size={size} color={color} />),
          tabBarLabel: '', // Oculta el texto
        }}
        name="Ayuda"
        component={SoportePantalla} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (<FontAwesome name="search" size={size} color={color} />),
          tabBarLabel: '', // Oculta el texto
        }}
        name="Viaje"
        component={SacaTuPasaje} />
    </Tab.Navigator>
  );

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
  );
};

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