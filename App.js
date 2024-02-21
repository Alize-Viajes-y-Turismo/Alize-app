import { StyleSheet} from 'react-native';
import StackNavigator from "./navigation/StackNavigator"
import { AuthProvider } from './auth/authentication';


function App() {
  return (
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
