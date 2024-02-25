import { View} from 'react-native';
import BotonPrimario from '../Componentes/BotonPrimario';

function HomeScreen() {

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
      <BotonPrimario text='Cerrar Sesion'></BotonPrimario>
    </View>
  )
}

export default HomeScreen