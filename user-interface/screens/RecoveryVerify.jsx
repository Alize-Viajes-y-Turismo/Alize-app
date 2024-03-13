import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import BotonSecundario from '../components/BotonSecundario';
import BotonPrimario from '../components/BotonPrimario';
import Checkbox from 'expo-checkbox';
import styles from '../styles/RegisterVerify';
import { Controller, useForm } from 'react-hook-form';
import { Entypo } from '@expo/vector-icons';
import { useAuthContext } from '../../contexts/AuthContext';



export default function RecoveryVerify({ navigation }) {
      
  return (
    <View style={styles.container}>
      <Text style={styles.texto1}>
        Codigo de Verificacion
      </Text>
      <View style={{height: "100%", backgroundColor: "lightgray"}}>
        <Text style={styles.texto2}>
          Te hemos enviado un mail con un codigo de validacion. Por favor, ingresa los 6 digitos que alli figuran para validar tu cuenta
        </Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} keyboardType='numeric' maxLength={6}/>
        </View>
        
        <View style={styles.btnContainer}>
          <BotonPrimario text="Enviar" style={styles.btn1}/>
          <BotonPrimario text="Cerrar"/>
        </View>
        

      </View>

    </View>
  )
}