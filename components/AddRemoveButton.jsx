import { StyleSheet, TouchableOpacity, Text} from "react-native";

export default function AddRemoveButton({ onPress, text, style }) {

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress} >
      <Text style={styles.text}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FC3232',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
})