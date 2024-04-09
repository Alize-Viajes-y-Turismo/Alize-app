import { StyleSheet, TouchableOpacity, Text} from "react-native";

export default function BotonAgregarQuitar({ onPress, text, style }) {

  return (
    <TouchableOpacity style={[styles.boton, style]} onPress={onPress} >
      <Text style={styles.texto}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  boton: {
    backgroundColor: '#FC3232',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: 'white',
    fontSize: 30,
  },
})