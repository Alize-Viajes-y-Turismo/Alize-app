import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function Boton({ onPress, text }) {

  return (
    <TouchableOpacity style={styles.btnText} onPress={onPress} >
      <Text style={styles.textBtn}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnText: {
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
  textBtn: {
    color: 'white',
    fontSize: 24,
    fontWeight: '400'
  },

})