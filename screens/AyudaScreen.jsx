import { Image, Linking, SafeAreaView, ScrollView, Text, View, } from 'react-native';
import BotonPrimario from '../Componentes/BotonPrimario';
import AyudaScreenStyles from '../styles/AyudaScreenStyles';
import { Collapse, CollapseBody, CollapseHeader } from 'accordion-collapse-react-native';

const SoportePantalla = () => {

  const handleWhatsAppPress = () => {
    const phoneNumber = '+543794681650'; // Reemplaza con el número de teléfono de WhatsApp al que deseas enviar el mensaje

    // Construye la URL de WhatsApp con el número de teléfono
    const whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${wppMsg}`;

    const wppMsg = 'Tengo un inconveniente con la app';

    // Intenta abrir la URL en la aplicación de WhatsApp
    Linking.openURL(whatsappUrl)
      .catch(err => console.error('Error al abrir WhatsApp:', err));
  };



  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={AyudaScreenStyles.container}>
          <View style={AyudaScreenStyles.boxTitleContainer}>
            <Text style={AyudaScreenStyles.title}>
              ¿Necesitas ayuda?
            </Text>
          </View>
          <View style={AyudaScreenStyles.boxTitleContainer}>
            <Text style={AyudaScreenStyles.subTitle}>
              Presiona el boton y te ayudamos a la brevedad
            </Text>
          </View>
          <View style={AyudaScreenStyles.imageContainer}>
            <Image source={require('../assets/support.png')} />
          </View>
          <View style={AyudaScreenStyles.containerBtn}>
            <BotonPrimario onPress={handleWhatsAppPress} text='Ayuda' />
          </View>
          <View style={AyudaScreenStyles.boxTitleContainer}>
            <Text style={AyudaScreenStyles.subTitle}>
              Preguntas Frecuentes
            </Text>
          </View>
          <View style={AyudaScreenStyles.boxCollapseContainer}>
            {/* //Simple collapsable */}
            <Collapse style={AyudaScreenStyles.collapseContainer}>
              <CollapseHeader>
                <View>
                  <Text style={AyudaScreenStyles.paragraph}>¿En el viaje nos entregan comida?</Text>
                </View>
              </CollapseHeader>
              <CollapseBody>
                <Text style={AyudaScreenStyles.textCollape}>No, por el momento no entregamos comida abordo</Text>
              </CollapseBody>
            </Collapse>
            {/* //Simple collapsable */}
            <Collapse style={AyudaScreenStyles.collapseContainer}>
              <CollapseHeader>
                <View>
                  <Text style={AyudaScreenStyles.paragraph}>¿Que pasa si cancelo mi viaje?</Text>
                </View>
              </CollapseHeader>
              <CollapseBody>
                <Text style={AyudaScreenStyles.textCollape}>El viaje solo puede ser cancelado 24hs despues de haberlo sacado</Text>
              </CollapseBody>
            </Collapse>
            {/* //Simple collapsable */}
            <Collapse>
              <CollapseHeader>
                <View>
                  <Text style={AyudaScreenStyles.paragraph}>¿Puedo viajar sin mi comprobante?</Text>
                </View>
              </CollapseHeader>
              <CollapseBody>
                <Text style={AyudaScreenStyles.textCollape}>No es posible viajar sin el comprobante, ya que de esa manera la empresa sabe que podes viajar</Text>
              </CollapseBody>
            </Collapse>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>

  );
};

export default SoportePantalla;



