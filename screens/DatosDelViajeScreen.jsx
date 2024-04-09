import { Text, TextInput, View } from "react-native";
import BotonPrimario from "../componentes/BotonPrimario";
import BotonSecundario from "../componentes/BotonSecundario";
import styles from "../styles/DatosDelViajeScreen";
import BotonAgregarQuitar from "../componentes/BotonAgregarQuitar";

const DatosDelViaje = () => {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>
            Datos del viaje
          </Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.subtitle}>
            Fecha
          </Text>
          <TextInput
            style={styles.input}
            placeholder="09/04/2024"
          />
        </View>
        <View style={styles.view}>
          <Text style={styles.subtitle}>
            Origen
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Corrientes Capital"
          />
        </View>
        <View style={styles.view}>
          <Text style={styles.subtitle}>
            Destino
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Buenos Aires"
          />
        </View>
        <View style={styles.view}>
          <Text style={styles.subtitle}>
            Pasajeros
          </Text>
          <View style={styles.viewContainer}>
            <BotonAgregarQuitar
              style={styles.boton}
              text='-'
            />
            <Text style={styles.paragraph}>
              1
            </Text>
            <BotonAgregarQuitar
              style={styles.boton}
              text='+'
            />
          </View>
        </View>

        <View style={styles.containerBtn}>
          <BotonPrimario
            text='Siguiente'
          />
          <BotonSecundario
            text='Atras'
          />
        </View>
      </View>
    </>
  )


}

export default DatosDelViaje;