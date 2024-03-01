import React from 'react';
import { View, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const { width, height } = Dimensions.get('window')

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
    paddingHorizontal: 20,
    paddingVertical:20, // Ajusta el espaciado horizontal según tu preferencia
    backgroundColor: 'white'
  },

});

export default Layout;