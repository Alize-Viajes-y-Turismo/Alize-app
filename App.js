import { StyleSheet, View, Text, Platform, StatusBar, Button, ScrollView } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import StackNavigator from './navigation/StackNavigator';


function App() {
  return (
    <StackNavigator />
  )
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

export default App