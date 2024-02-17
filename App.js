import { StyleSheet, View, Text, Platform, StatusBar, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InicioPantalla from './screens/InicioPantalla';
import SoportePantalla from './screens/SoportePantalla';
import SacaTuPasaje from './screens/PasajesPantalla';
import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#FC3232', // Cambia el color de fondo del encabezado
              borderBottomWidth: 2, // Agrega un borde inferior al encabezado
              borderBottomColor: '#000', // Color del borde inferior
              shadowColor: '#000', // Color de la sombra
              shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
              shadowOpacity: 0.25, // Opacidad de la sombra
              shadowRadius: 3, // Radio de la sombra
              elevation: 5, // Elevación en Android (sombra)
            },
            headerTintColor: 'white',
            tabBarBadge: '',
            tabBarLabel: '',
            tabBarVisible: '',
            tabBarStyle: {
              backgroundColor: '#ffffff', // Color de fondo de la barra de pestañas
              borderTopWidth: 1, // Grosor de la parte superior de la barra de pestañas
              borderTopColor: '#ccc', // Color del borde superior de la barra de pestañas
              margin: 20,
              height:80,
            },
          }}
          tabBarOptions={{
            activeTintColor: "#fff",
            activeBackgroundColor: "#FC3232",
            inactiveTintColor: "#000",
            inactiveBackgroundColor: "#fff"
          }}>
          <Tab.Screen options={{
            tabBarIcon: ({ size }) => (<FontAwesome6 name="user" size={size} />),
            tabBarLabelStyle: {
              fontSize: 16, // Tamaño del texto de la etiqueta de la pestaña
              fontWeight: 'bold', // Peso de la fuente
              color: '#FFA500', // Color del texto de la etiqueta de la pestaña
            },
          }} name="Iniciar Sesion" component={InicioPantalla} />
          <Tab.Screen options={{ tabBarIcon: ({ size }) => (<AntDesign name="message1" size={size} color="black" />), }} name="Soporte" component={SoportePantalla} />
          <Tab.Screen options={{ tabBarIcon: ({ size }) => (<FontAwesome name="search" size={size} color="black" />), }} name="Pasaje" component={SacaTuPasaje} />
        </Tab.Navigator>
      </NavigationContainer>

    </>
  );
};

const styles = StyleSheet.create({
  navigatorContainer:{
borderRadius: 20
  },
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'pink',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flex: 0.2,
    borderWidth: 2,
    borderColor: 'blue',
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
