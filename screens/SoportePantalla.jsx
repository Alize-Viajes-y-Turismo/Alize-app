import { Image, Platform, ScrollView, StatusBar, StyleSheet, Text, View, } from 'react-native';
import Boton from '../Components/BotonPrimario';

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
          <Boton text='Obtener Ayuda' ></Boton>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'pink',
    padding: 20,
    backgroundColor: 'white'
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

export default SoportePantalla;