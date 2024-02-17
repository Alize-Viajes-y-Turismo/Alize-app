import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function Boton({ onPress }) {

  return (
    <TouchableOpacity style={styles.btnText} onPress={onPress} >
      <Text style={styles.textBtn}>
        Iniciar Sesion
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnText: {
    backgroundColor: '#F46262',
    width: '176px',
    height:'48px',
    borderRadius: 6,
    paddingHorizontal:20 ,
    paddingVertical:10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
  },
  textBtn: {
    color: 'white',
    fontSize: 24,
    fontWeight:'400'
  },

})