import { StyleSheet } from "react-native"

const DatosDelViaje = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  view: {
    marginBottom: 25,
  },
  viewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    color: '#1E1E1E',
    fontSize: 24,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 5,
    color: 'gray',
  },
  paragraph: {
    fontSize: 20,
  },
  input: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    width: "100%"
  },
  boton: {
    width: 60,
  },
  containerBtn: {
    alignItems: 'center',
    gap: 20,
    marginTop:30
  }
})

export default DatosDelViaje