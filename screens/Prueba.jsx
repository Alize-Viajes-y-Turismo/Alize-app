import React from 'react'
import { KeyboardAvoidingView, Text, View } from 'react-native'
import LoadingScreen from './LoadingScreen'
import { TextInput } from 'react-native-paper'

const Prueba = () => {
  return (
    <>
    <KeyboardAvoidingView style={{alignItems: "center"}}>
    <View style={{borderWidth: 1, height: 500}}>
      <TextInput/>
      <TextInput/>
      <TextInput/>
      <TextInput/>
      <TextInput/>
      <TextInput/>
      <TextInput/>
      <TextInput/>
      <TextInput/>
      <TextInput/>
      <TextInput/>
      <TextInput/>

    </View>


    <View style={{borderWidth: 1, height: 500}}/>
    </KeyboardAvoidingView>

    </>

      
  )
}

export default Prueba