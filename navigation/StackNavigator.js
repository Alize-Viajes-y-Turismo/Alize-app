import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Platform, StatusBar} from 'react-native';

//screens


import { useAuth } from '../auth/authentication';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator();

function StackNavigator() {
    const authData = useAuth()

    return (
        <NavigationContainer>
          {authData ? <AppStack/> : <AuthStack/>}
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