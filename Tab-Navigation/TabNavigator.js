import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BienvenidaPantalla from '../screens/BienvenidaPantalla';
import SoportePantalla from '../screens/SoportePantalla';
import PasajePantalla from '../screens/PasajesPantalla';
import PruebasPantalla from '../screens/PruebasPantalla';


import { useNavigation } from '@react-navigation/native';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import { useEffect } from 'react';

const Tab = createBottomTabNavigator();


const TabNavigator = () => {

  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])


  return (
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
          headerShown: false,
          tabBarLabel: '', // Oculta el texto
        }}
        name="Iniciar Sesion"
        component={BienvenidaPantalla} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (<AntDesign name="message1" size={size} color={color} />),
          headerShown: false,
          tabBarLabel: '', // Oculta el texto
        }}
        name="Ayuda"
        component={SoportePantalla} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (<FontAwesome name="search" size={size} color={color} />),
          headerShown: false,
          tabBarLabel: '', // Oculta el texto
        }}
        name="Viaje"
        component={PasajePantalla} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (<FontAwesome5 name="question" size={size} color={color} />),
          headerShown: false,
          tabBarLabel: '', // Oculta el texto
        }}
        name="Pruebas"
        component={PruebasPantalla} />
    </Tab.Navigator>


  )
}

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



export default TabNavigator;