import React from 'react'
import { View} from 'react-native'
import BotonPrimario from '../componentes/BotonPrimario'
import { useAuthContext } from '../contexts/AuthContext';
import { Text } from 'react-native';
import { TextInput } from 'react-native-paper';

function CodigoVerificacionScreen() {

  const { register } = useAuthContext();

  const handleRegister = async (data) => {

    user = {

      email: data.email,
      password: data.password

    }

    try {
      
      startLoginLoading()
      await register(user);
      endLoginLoading()
        
    } catch(error) {

      alert(error.message)
      endLoginLoading()
        
    }
    
  };

  return (
    <View style={{flex: 1, backgroundColor: "white", borderWidth: 1}}>
      <Text style={{backgroundColor: "red", textAlign: "center", padding: 15, color: "white", fontSize: 20}}>
        Codigo de Verificacion
      </Text>
      <View style={{height: "100%", backgroundColor: "lightgray"}}>
        <Text>
          Te hemos enviado un mail con un codigo de validacion. Por favor, ingresa los 6 digitos que alli figuran para validar tu cuenta
        </Text>
        <View style={{flexDirection: "row", justifyContent: "space-around"}}>
          <TextInput style={{width: 40, borderWidth: 1, backgroundColor: "white"}}/>
          <TextInput style={{width: 40, borderWidth: 1, backgroundColor: "white"}}/>
          <TextInput style={{width: 40, borderWidth: 1, backgroundColor: "white"}}/>
          <TextInput style={{width: 40, borderWidth: 1, backgroundColor: "white"}}/>
          <TextInput style={{width: 40, borderWidth: 1, backgroundColor: "white"}}/>
          <TextInput style={{width: 40, borderWidth: 1, backgroundColor: "white"}}/>
        </View>

        <BotonPrimario text="Enviar"/>
        <BotonPrimario text="Cerrar"/>

      </View>

    </View>
  )
}

export default CodigoVerificacionScreen