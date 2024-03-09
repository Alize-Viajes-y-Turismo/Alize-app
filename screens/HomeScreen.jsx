import React from 'react'
import { View} from 'react-native'
import BotonPrimario from '../componentes/BotonPrimario'
import { useAuthContext } from '../contexts/AuthContext';
import { useLoadingContext } from '../contexts/LoadingContext';
import { ActivityIndicator } from 'react-native';


function HomeScreen() {

  const {logout} = useAuthContext();

  const {loginLoading, startLoginLoading, endLoginLoading} = useLoadingContext()


  const handlerLogout = async () => {

    try {

      startLoginLoading()
      await logout();
      endLoginLoading()
      
    } catch(error) {

      alert(error.message);
      endLoginLoading()
    }

  };



  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white"}}>
      <BotonPrimario text='Mis datos'></BotonPrimario>
      <BotonPrimario text='Mis pasajes' style={{marginTop: "5%", marginBottom: "5%"}}></BotonPrimario>
      {

        loginLoading ?

        <ActivityIndicator size={100} color="#FC3232"/>
        
        :

        <BotonPrimario  onPress={handlerLogout} text='Cerrar Sesion'></BotonPrimario>
        
      }
      
    </View>
  )
}

export default HomeScreen