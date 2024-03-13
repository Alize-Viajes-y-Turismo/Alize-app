import { Image, Linking, SafeAreaView, ScrollView, Text, View, } from 'react-native';
import BotonPrimario from '../components/BotonPrimario';
import styles from '../styles/Support';
import { Collapse, CollapseBody, CollapseHeader } from 'accordion-collapse-react-native';

export default Support = () => {

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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.boxTitleContainer}>
            <Text style={styles.title}>
              ¿Necesitás ayuda?
            </Text>
          </View>
          <View style={styles.boxTitleContainer}>
            <Text style={styles.subTitle}>
              Presiona el botón y te ayudamos a la brevedad
            </Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={require('../../assets/support.png')} />
          </View>
          <View style={styles.containerBtn}>
            <BotonPrimario onPress={handleWhatsAppPress} text='Ayuda' />
          </View>
          <View style={styles.boxTitleContainer}>
            <Text style={styles.subTitle}>
              Preguntas Frecuentes
            </Text>
          </View>
          <View style={styles.boxCollapseContainer}>
            {/* //Simple collapsable */}
            <Collapse style={styles.collapseContainer}>
              <CollapseHeader>
                <View>
                  <Text style={styles.paragraph}>¿En el viaje nos entregan comida?</Text>
                </View>
              </CollapseHeader>
              <CollapseBody>
                <Text style={styles.textCollape}>No, por el momento no entregamos comida abordo</Text>
              </CollapseBody>
            </Collapse>
            {/* //Simple collapsable */}
            <Collapse style={styles.collapseContainer}>
              <CollapseHeader>
                <View>
                  <Text style={styles.paragraph}>¿Que pasa si cancelo mi viaje?</Text>
                </View>
              </CollapseHeader>
              <CollapseBody>
                <Text style={styles.textCollape}>El viaje solo puede ser cancelado 24hs despues de haberlo sacado</Text>
              </CollapseBody>
            </Collapse>
            {/* //Simple collapsable */}
            <Collapse style={styles.collapseContainer}>
              <CollapseHeader>
                <View>
                  <Text style={styles.paragraph}>¿Puedo viajar sin mi comprobante?</Text>
                </View>
              </CollapseHeader>
              <CollapseBody>
                <Text style={styles.textCollape}>No es posible viajar sin el comprobante, ya que de esa manera la empresa sabe que podes viajar</Text>
              </CollapseBody>
            </Collapse>
          </View>
        </View>
      </ScrollView>
  );
};


