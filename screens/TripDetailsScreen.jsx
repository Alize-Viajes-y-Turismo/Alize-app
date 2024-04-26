import React from "react";
import { Text, TextInput, View } from "react-native";
import TripDetailsScreenStyles from "./styles/TripDetailsScreenStyles";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import AddRemoveButton from "../components/AddRemoveButton";

const TripDetailsScreen = () => {
  return (
    <>
      <View style={TripDetailsScreenStyles.container}>
        <View>
          <Text style={TripDetailsScreenStyles.titulo}>
            Datos del viaje
          </Text>
        </View>
        <View style={TripDetailsScreenStyles.containerCalendar}>
          <Text style={TripDetailsScreenStyles.text}>
            Fecha
          </Text>
          <TextInput
            style={TripDetailsScreenStyles.calendarInput}
            placeholder="09/04/2024"
          />
        </View>
        <View style={TripDetailsScreenStyles.container}>
          <Text style={TripDetailsScreenStyles.text}>
            Origen
          </Text>
          <TextInput
            style={TripDetailsScreenStyles.input}
            placeholder="Corrientes Capital"
          />
        </View>
        <View style={TripDetailsScreenStyles.container}>
          <Text style={TripDetailsScreenStyles.text}>
            Destino
          </Text>
          <TextInput
            style={TripDetailsScreenStyles.input}
            placeholder="Buenos Aires"
          />
        </View>
        <View style={TripDetailsScreenStyles.container}>
          <Text style={TripDetailsScreenStyles.text}>
            Pasajeros
          </Text>
          <View style={TripDetailsScreenStyles.container}>
            <AddRemoveButton
              style={TripDetailsScreenStyles.btn}
              text='-'
            />
            <Text style={TripDetailsScreenStyles.text}>
              1
            </Text>
            <AddRemoveButton
              style={TripDetailsScreenStyles.btn}
              text='+'
            />
          </View>
        </View>

        <View style={TripDetailsScreenStyles.container}>
          <PrimaryButton
            text='Siguiente'
          />
          <SecondaryButton
            text='Atras'
          />
        </View>
      </View>
    </>
  )
}

export default TripDetailsScreen;