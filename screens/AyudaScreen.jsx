import { Image, ScrollView, StatusBar, StyleSheet, Text, View, } from 'react-native';
import BotonPrimario from '../Componentes/BotonPrimario';

const SoportePantalla = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.boxTitleContainer}>
          <Text style={styles.text}>
            ¿Necesitas ayuda?
          </Text>
        </View>
        <View style={styles.boxTitleContainer}>
          <Text style={styles.title}>
            Presiona el boton y te ayudamos a la brevedad
          </Text>
        </View>
        <View>
          <Image src='./assets/support.png' />
        </View>
        <View style={styles.containerBtn}>
        </View>
        <View style={styles.boxTitleContainer}>
          <BotonPrimario text='Ayuda' />
        </View>
        <View style={styles.boxTitleContainer}>
          <Text style={styles.text}>
            Preguntas Frecuentes
          </Text>
        </View>

      </View>
    </ScrollView>
  );
};

export default SoportePantalla;

//OPCIONES ----------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'pink',
    padding: 20,
  },
  title: {
    color: '#F46262',
    fontSize: 24,
    fontWeight: '400',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: 300,
    margin: 10,
  },
  text: {
    color: '#1E1E1E',
    fontSize: 36,

  },
  btn: {
    backgroundColor: 'gray',
  },
  boxTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
})

