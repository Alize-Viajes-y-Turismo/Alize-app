import { StyleSheet } from "react-native"

const IniciarSesionScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: "space-around"
  },
  title: {
    color: '#1E1E1E',
    fontSize: 25,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    width: "100%",
    height: "80%"
  },
  inputContainer: {
    width: "100%",
    height: "30%",
    alignItems:"center",
    justifyContent: "space-around"
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    height: "80%"
  },
  passwordInput: {
    flex: 1,
  },
  passwordVisibilityButton: {
    padding: 10,
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
  div: {
    width: "100%",
    height: "25%",
    justifyContent: "center"
  },
})

export default IniciarSesionScreenStyles