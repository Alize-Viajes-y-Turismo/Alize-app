import React from 'react'
import { View} from 'react-native'
import BotonPrimario from '../Componentes/BotonPrimario'


function HomeScreen() {

  return (
    <View>
      <BotonPrimario text='Mis datos'></BotonPrimario>
      <BotonPrimario text='Mis pasajes'></BotonPrimario>
      <BotonPrimario text='Cerrar Sesion'></BotonPrimario>
    </View>
  )
}

export default HomeScreen