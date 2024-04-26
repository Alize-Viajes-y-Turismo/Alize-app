import { Image, Linking, SafeAreaView, ScrollView, Text, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import SupportScreenStyles from './styles/SupportScreenStyles';
import { Collapse, CollapseBody, CollapseHeader } from 'accordion-collapse-react-native';

const SupportScreen = () => {

  const handleWhatsAppPress = () => {
    const phoneNumber = '+543794077764'; // Reemplaza con el número de teléfono de WhatsApp al que deseas enviar el mensaje
    const customMessage = 'Hola Alize Viajes y Turismo, necesito hacer una consulta';
  
    // Codifica el mensaje personalizado para que se pueda incluir en la URL
    const encodedMessage = encodeURIComponent(customMessage);
  
    // Construye la URL de WhatsApp con el número de teléfono y el mensaje personalizado
    const whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
  
    // Intenta abrir la URL en la aplicación de WhatsApp
    Linking.openURL(whatsappUrl)
      .catch(err => console.error('Error al abrir WhatsApp:', err));
  };



  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={SupportScreenStyles.container}>
        <View style={SupportScreenStyles.boxTitleContainer}>
          <Text style={SupportScreenStyles.title}>
            ¿Necesitás ayuda?
          </Text>
        </View>
        <View style={SupportScreenStyles.boxTitleContainer}>
          <Text style={SupportScreenStyles.subTitle}>
            Presiona el botón y te ayudamos a la brevedad
          </Text>
        </View>
        <View style={SupportScreenStyles.imageContainer}>
          <Image source={require('../assets/support.png')} />
        </View>
        <View style={SupportScreenStyles.containerBtn}>
          <PrimaryButton onPress={handleWhatsAppPress} text='Ayuda' />
        </View>
        <View style={SupportScreenStyles.boxTitleContainer}>
          <Text style={SupportScreenStyles.subTitle}>
            Preguntas Frecuentes
          </Text>
        </View>
        <View style={SupportScreenStyles.boxCollapseContainer}>
          {/* //Simple collapsable */}
          <Collapse style={SupportScreenStyles.collapseContainer}>
            <CollapseHeader>
              <View style={SupportScreenStyles.containerTextCollpse}>
                <Text style={SupportScreenStyles.paragraph}>¿En el viaje nos entregan comida?</Text>
                <View>
                  <Image
                    source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABHElEQVR4nO3SMSiFYRSA4QcRiZSUUpSyKIvBYDKYLBYWk81iNNnvZLTYTBYWi8lgMhgsyqIUpZSUSES4Ur+SIpf/3vvdnKfOeOq8fR8hhBBCCCGEEHJXQDHxKfw0ZimBY4tfzHIpr1KHlQSOLn6aVdSX+sXeFtYSOL6YzQYa/NLb4noCEZto9EdN2KpixDaa5aQFO1WI2EWrnLVjr4IRe2hTJh3Yr0DEATqVWRcOyxhxhG4V0oPjMkScok+F9eIkx4gz9KuSAZznEHGBQVU2hMs/RFxhWCJGcPOLiOtsNymjuC0h4g5jEjWO+x9EPGBC4ibx+E3EE6bViKns4M8Rz5hRY2azw98jXjCnRs1/CFlQ4xazCSGEEEL4b14BnfLMQvEtlakAAAAASUVORK5CYII=' }}
                    style={{ width: 30, height: 30 }}
                  />
                </View>
              </View>
            </CollapseHeader>
            <CollapseBody>
              <View >
                <Text style={SupportScreenStyles.textCollape}>No, por el momento no entregamos comida abordo</Text>
              </View>
            </CollapseBody>
          </Collapse>
          {/* //Simple collapsable */}
          <Collapse style={SupportScreenStyles.collapseContainer}>
            <CollapseHeader>
              <View style={SupportScreenStyles.containerTextCollpse}>
                <Text style={SupportScreenStyles.paragraph}>¿Que pasa si cancelo mi viaje?</Text>
                <View>
                  <Image
                    source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABHElEQVR4nO3SMSiFYRSA4QcRiZSUUpSyKIvBYDKYLBYWk81iNNnvZLTYTBYWi8lgMhgsyqIUpZSUSES4Ur+SIpf/3vvdnKfOeOq8fR8hhBBCCCGEEHJXQDHxKfw0ZimBY4tfzHIpr1KHlQSOLn6aVdSX+sXeFtYSOL6YzQYa/NLb4noCEZto9EdN2KpixDaa5aQFO1WI2EWrnLVjr4IRe2hTJh3Yr0DEATqVWRcOyxhxhG4V0oPjMkScok+F9eIkx4gz9KuSAZznEHGBQVU2hMs/RFxhWCJGcPOLiOtsNymjuC0h4g5jEjWO+x9EPGBC4ibx+E3EE6bViKns4M8Rz5hRY2azw98jXjCnRs1/CFlQ4xazCSGEEEL4b14BnfLMQvEtlakAAAAASUVORK5CYII=' }}
                    style={{ width: 30, height: 30 }}
                  />
                </View>
              </View>
            </CollapseHeader>
            <CollapseBody>
              <Text style={SupportScreenStyles.textCollape}>El viaje solo puede ser cancelado 24hs despues de haberlo sacado</Text>
            </CollapseBody>
          </Collapse>
          {/* //Simple collapsable */}
          <Collapse style={SupportScreenStyles.collapseContainer}>
            <CollapseHeader>
              <View style={SupportScreenStyles.containerTextCollpse}>
                <Text style={SupportScreenStyles.paragraph}>¿Puedo viajar sin mi comprobante?</Text>
                <View>
                  <Image
                    source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABHElEQVR4nO3SMSiFYRSA4QcRiZSUUpSyKIvBYDKYLBYWk81iNNnvZLTYTBYWi8lgMhgsyqIUpZSUSES4Ur+SIpf/3vvdnKfOeOq8fR8hhBBCCCGEEHJXQDHxKfw0ZimBY4tfzHIpr1KHlQSOLn6aVdSX+sXeFtYSOL6YzQYa/NLb4noCEZto9EdN2KpixDaa5aQFO1WI2EWrnLVjr4IRe2hTJh3Yr0DEATqVWRcOyxhxhG4V0oPjMkScok+F9eIkx4gz9KuSAZznEHGBQVU2hMs/RFxhWCJGcPOLiOtsNymjuC0h4g5jEjWO+x9EPGBC4ibx+E3EE6bViKns4M8Rz5hRY2azw98jXjCnRs1/CFlQ4xazCSGEEEL4b14BnfLMQvEtlakAAAAASUVORK5CYII=' }}
                    style={{ width: 30, height: 30 }}
                  />
                </View>
              </View>
            </CollapseHeader>
            <CollapseBody>
              <Text style={SupportScreenStyles.textCollape}>No es posible viajar sin el comprobante, ya que de esa manera la empresa sabe que podes viajar</Text>
            </CollapseBody>
          </Collapse>
        </View>
      </View>
    </ScrollView>
  );
};

export default SupportScreen;