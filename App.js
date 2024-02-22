<<<<<<< HEAD
import { StyleSheet} from 'react-native';
import StackNavigator from "./navigation/StackNavigator"
import { AuthProvider } from './auth/authentication';
=======
import TabNavigator from './navigation/TabNavigatior';


export default function App() {
>>>>>>> a865144 (eliminando antiguos tab-navigation y stack-navigation, y eliminando StyleSheet de App)

  return (
<<<<<<< HEAD
    <AuthProvider>
      <StackNavigator/>
    </AuthProvider>
  );
};

export default App

const styles = StyleSheet.create({
  tab: {
    backgroundColor: 'red',
  }
});
=======
    <TabNavigator />
  )
  
}
>>>>>>> a865144 (eliminando antiguos tab-navigation y stack-navigation, y eliminando StyleSheet de App)
