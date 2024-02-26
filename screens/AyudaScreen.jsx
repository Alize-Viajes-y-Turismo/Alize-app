import { Image, ScrollView, Text, View, } from 'react-native';
import BotonPrimario from '../Componentes/BotonPrimario';
import AyudaScreenStyles from '../styles/AyudaScreenStyles';

function AyudaScreen() {
  return (
    <ScrollView>
      <View style={AyudaScreenStyles.container}>
        <View style={AyudaScreenStyles.boxTitleContainer}>
          <Text style={AyudaScreenStyles.text}>
            ¿Necesitas ayuda?
          </Text>
        </View>
        <View style={AyudaScreenStyles.boxTitleContainer}>
          <Text style={AyudaScreenStyles.title}>
            Presiona el boton y te ayudamos a la brevedad
          </Text>
        </View>
        <View>
          <Image src='./assets/support.png' />
        </View>
        <View style={AyudaScreenStyles.containerBtn}>
          <BotonPrimario text='Obtener Ayuda' />
        </View>
        <View style={AyudaScreenStyles.boxTitleContainer}>
          <Text style={AyudaScreenStyles.text}>
            Preguntas Frecuentes
          </Text>
        </View>
     
      </View>
    </ScrollView>
  );
};

export default AyudaScreen;