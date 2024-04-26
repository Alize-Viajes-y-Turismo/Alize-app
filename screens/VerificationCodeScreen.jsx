import React, { useState, useRef } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

import { useAuthContext } from '../contexts/AuthContext';
import { useLoadingContext } from '../contexts/LoadingContext';
import { useVerificationContext } from '../contexts/VerificationContext';
import { useRegisterContext } from '../contexts/RegisterContext';

const VerificationCodeScreen = ({ navigation, route }) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const userCode = code.join('');
  const inputRefs = useRef([]);

  const { loginData } = useAuthContext();
  const { registerData } = useRegisterContext();
  const { verifyCode, verifyUser } = useVerificationContext();
  const { loginLoading, startLoginLoading, endLoginLoading } = useLoadingContext();
  const { navigate } = route.params;

  const handleTextChange = (text, index) => {
    if (!isNaN(text) && index < code.length - 1) {
      inputRefs.current[index + 1].focus();
    }
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
  };

  const handleVerifyCode = async (data) => {

    try {

      startLoginLoading();
      const success = await verifyCode(data);

      if (success && navigate === "fromRegister") {

        await verifyUser(registerData);

        navigation.navigate("LoginScreen");

      } else if (success && navigate === "fromPreRecoveryPassword") {

        navigation.navigate("UpdateRecoveryPasswordScreen", { navigate: "fromRecoveryPassword" });

      } else if (success && navigate === "fromLogin") {

        await verifyUser(loginData);
        navigation.navigate("LoginScreen", { navigate: "fromLogin" });

      };
      endLoginLoading();

    } catch (error) {

      console.log(error.message);
      endLoginLoading();

    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Código de Verificación</Text>
      <Text style={styles.subtitle}>Por favor, ingresa los 6 dígitos del código:</Text>
      <View style={styles.codeContainer}>
        {code.map((value, index) => (
          <TextInput
            key={index}
            ref={(input) => (inputRefs.current[index] = input)}
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
            value={value}
            onChangeText={(text) => handleTextChange(text, index)}
          />
        ))}
      </View>
      <View style={styles.buttonsContainer}>
        {loginLoading ? (
          <ActivityIndicator size={100} color="#FC3232"/>
        ) : (
          <TouchableOpacity onPress={() => handleVerifyCode({ userCode: userCode })} style={styles.primaryButton}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.secondaryButton}>
          <Text style={styles.buttonText}>Atrás</Text>
        </TouchableOpacity> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  codeContainer: {
    flexDirection: 'row',
  },
  input: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 5,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  primaryButton: {
    backgroundColor: '#FC3232',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  secondaryButton: {
    backgroundColor: '#DDDDDD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'white', // Cambia el color del texto para los botones
  },
});

export default VerificationCodeScreen;