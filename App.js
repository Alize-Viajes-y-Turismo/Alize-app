import { StyleSheet, View, Text, Platform, StatusBar, Button, ScrollView } from 'react-native';
import PantallaEntrada from './screens/PrimerPantalla';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InicioPantalla from './screens/InicioPantalla';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <>
      <ScrollView>
        <PantallaEntrada />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Inicio de Sesion" component={InicioPantalla} />
        </Stack.Navigator>
      </NavigationContainer>
      </ScrollView>

    </>
  );
};

const styles = StyleSheet.create({
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

});
