import { StyleSheet} from 'react-native';
import StackNavigator from './Stack-Navigation/StackNavigator';


export default function App() {


  return (
    <>
        <StackNavigator />
    </>
  );
};

const styles = StyleSheet.create({
  tab: {
    backgroundColor: 'red',
  }
});