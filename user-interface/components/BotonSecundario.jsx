import { StyleSheet, TouchableOpacity, Text} from "react-native";

export default function BotonSecundario({ onPress, text, style }) {

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
    width: '60%',
    height: '48px',
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#F46262',
    borderWidth: 2,
  },
  texto: {
    color: 'gray',
    fontSize: 24,
    fontWeight: '400'
  },

})