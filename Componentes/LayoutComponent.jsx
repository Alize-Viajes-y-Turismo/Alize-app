import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

const Layout = ({ children }) => {
  return (
      <View style={styles.container}>
        {children}
      </View>



  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 20, // Ajusta el espaciado horizontal según tu preferencia
  },
});

export default Layout;