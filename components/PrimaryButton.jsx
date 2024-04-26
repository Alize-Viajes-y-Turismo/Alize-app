import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function PrimaryButton({ onPress, text, style }) {

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
    width: '60%',
    height: '48px',
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: '400'
  },
})