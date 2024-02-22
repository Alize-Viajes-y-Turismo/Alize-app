import { StyleSheet, TouchableOpacity, Text} from "react-native";

export default function BotonPrimario({ onPress, text }) {

  return (
    <TouchableOpacity style={styles.boton} onPress={onPress} >
      <Text style={styles.texto}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

//estilos

const styles = StyleSheet.create({
  boton: {
    backgroundColor: '#FC3232',
    width: '176px',
    height: '48px',
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  texto: {
    color: 'white',
    fontSize: 24,
    fontWeight: '400'
  },
})