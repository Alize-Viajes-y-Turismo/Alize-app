import React from 'react'
import { View} from 'react-native'
import BotonPrimario from '../components/BotonPrimario'
import { useAuthContext } from '../contexts/AuthContext';

function HomeScreen() {

  //CONSTANTES

  const {logout} = useAuthContext();







  const handlerLogout = async () => {

    try {

      logout();
      
    } catch(error) {

      alert(error.message);
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