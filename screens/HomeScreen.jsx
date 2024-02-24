import React from 'react'
import { View} from 'react-native'
import { useAuthContext } from '../contexts/AuthContext'
import BotonPrimario from '../Componentes/BotonPrimario'
import { Text } from 'react-native-paper'

function HomeScreen() {

  const {logout, fakeLogout} = useAuthContext()

  function logoutHandler() {
    logout()
  }

  function fakeLoginHandler() {
    fakeLogout()
  }

  function misDatosHandler() {
    alert("Esta pantalla todavia no existe")
  }

  function misPasajesHandler() {
    alert("Esta pantalla todavia no existe")
  }

  return (
    <View>
      <BotonPrimario onPress={misDatosHandler} text='Mis datos'></BotonPrimario>
      <BotonPrimario onPress={misPasajesHandler} text='Mis pasajes'></BotonPrimario>
      <BotonPrimario onPress={fakeLoginHandler} text='Cerrar Sesion'></BotonPrimario>
    </View>
  )
}

export default HomeScreen