import { StyleSheet } from "react-native"

const IniciarSesionScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    marginTop: 20
  },
  title: {
    color: '#1E1E1E',
    fontSize: 24,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 40
  },
  boxTitleContainer: {
    marginBottom: 20
  },
  subtitle: {
    fontSize: 24,
    color: '#1E1E1E',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 40
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    paddingHorizontal: 10

  },
  inputContainer: {
    marginBottom: 20,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10
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
    marginBottom: 20
  }
})

export default IniciarSesionScreenStyles