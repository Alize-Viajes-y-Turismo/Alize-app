import { StyleSheet } from "react-native"
import { horizontalScale, verticalScale } from "./metrics"

const IniciarSesionScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  texto1: {
    color: 'black',
    fontSize: 24,
    textAlign: 'center',
    marginTop: verticalScale(40)
  },
  texto2: {
    color: 'black',
    fontSize: 22,
    textAlign: 'center',
    marginTop: verticalScale(20),
    marginBottom: verticalScale(50)
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    height: verticalScale(50),
    paddingHorizontal: horizontalScale(10)
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
    height: verticalScale(50),
  },
  passwordInput: {
    flex: 9
  },
  container2 :{
    marginTop: verticalScale(20)
  },
  passwordVisibilityButton: {
    flex: 1,
    justifyContent: "center"
  },
  paragraph: {
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
    marginTop: verticalScale(50),
    marginBottom: verticalScale(30)
  },
  paragraph2: {
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
    marginTop: verticalScale(20),
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