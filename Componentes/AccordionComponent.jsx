import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Collapsible from 'react-native-collapsible';

const FAQItem = ({ question, answer }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleCollapse} style={styles.clickableArea}>
        <Text style={styles.question}>{question}</Text>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <Text style={styles.answer}>{answer}</Text>
      </Collapsible>
    </View>
  );
};

const FAQComponent = () => {
  const faqData = [
    { question: '¿Pregunta 1?', answer: 'Respuesta 1.' },
    { question: '¿Pregunta 2?', answer: 'Respuesta 2.' },
    // Agrega más preguntas y respuestas según sea necesario
  ];

  return (
    <View>
      <Text style={styles.title}>Preguntas Frecuentes</Text>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#F46262',
    fontSize: 24,
    fontWeight: '400',
    textAlign: 'center',
    margin: 10,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  answer: {
    fontSize: 16,
    marginVertical: 5,
  },
  clickableArea: {
    padding: 10,
  },
})

export default FAQComponent;