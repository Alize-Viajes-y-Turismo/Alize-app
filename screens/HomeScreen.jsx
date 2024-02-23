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

  return (
    <View>
      <Text>Aqui debe ir el perfil del usuario</Text>
      <BotonPrimario onPress={fakeLoginHandler} text='Cerrar Sesion'></BotonPrimario>
    </View>
  )
}

export default HomeScreen