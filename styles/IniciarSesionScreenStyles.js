import { StyleSheet } from "react-native"

const IniciarSesionScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  h1: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
  },
  h2: {
    color: 'black',
    fontSize: 22,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    height: 50
  },
  inputContainer: {
    alignItems:"center",
    justifyContent: "space-around"
  },
  passwordInputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    height: 50
  },
  passwordInput: {
    flex: 9
  },
  passwordVisibilityButton: {
    flex: 1,
    justifyContent: "center"
  },
  paragraph: {
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderWidth: 1
  },
  errorMessage: {
    color: 'red',
  },
})

export default IniciarSesionScreenStyles