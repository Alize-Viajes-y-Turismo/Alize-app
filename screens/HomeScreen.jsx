import React from 'react'
import { View} from 'react-native'
import BotonPrimario from '../componentes/BotonPrimario'
import { useAuthContext } from '../contexts/AuthContext';

function HomeScreen() {

  const {logout} = useAuthContext();

  const handlerLogout = async () => {

    try {

      logout();
      
    } catch(error) {

      console.log(error.message);
    }

};



  return (
    <View>
      <BotonPrimario text='Mis datos'></BotonPrimario>
      <BotonPrimario text='Mis pasajes'></BotonPrimario>
      <BotonPrimario  onPress={handlerLogout} text='Cerrar Sesion'></BotonPrimario>
    </View>
  )
}

export default HomeScreen