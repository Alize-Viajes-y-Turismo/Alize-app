import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const Layout = ({ children }) => {
  const { width, height } = Dimensions.get('window');

  return (
    <View style={[styles.container, { width, height }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
});

export default Layout;