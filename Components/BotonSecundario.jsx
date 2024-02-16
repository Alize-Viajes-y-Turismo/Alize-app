import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function BotonAtras({ onPress, text }) {

  return (
    <TouchableOpacity style={styles.btnTextAtras} onPress={onPress} >
      <Text style={styles.textBtnAtras}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnTextAtras: {
    width: '176px',
    height: '48px',
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#F46262',
    borderWidth: 2,
  },
  textBtnAtras: {
    color: 'gray',
    fontSize: 24,
    fontWeight: '400'
  },

})