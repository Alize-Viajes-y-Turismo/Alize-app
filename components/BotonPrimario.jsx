import { StyleSheet, TouchableOpacity, Text} from "react-native";

export default function BotonPrimario({ onPress, text, style }) {

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
    width: '60%',
    height: '48px',
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: 'white',
    fontSize: 24,
    fontWeight: '400'
  },
})