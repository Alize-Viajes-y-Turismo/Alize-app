import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import SimulacionCarga from '../Components/SimulacionCarga';


const PantallaEntrada = () => {

  return (
    <ScrollView>
      <SimulacionCarga>

      </SimulacionCarga>
    </ScrollView>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'pink',
    padding: 20,
    backgroundColor: 'white'
  },
})

export default PantallaEntrada;
