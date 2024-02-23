import React from 'react'
import { View} from 'react-native'
import { useAuthContext } from '../contexts/AuthContext'

function HomeScreen() {

  const {logout} = useAuthContext()

  function logoutHandler() {
    logout()
  }

  return (
    <View>
      <BotonPrimario onPress={logoutHandler} text='Cerrar Sesion'></BotonPrimario>
    </View>
  )
}

export default HomeScreen