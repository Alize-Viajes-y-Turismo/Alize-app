import React from 'react';
import { Image, View } from 'react-native';

function LoadingScreen() {

  return (
    <View>
      <Image source={require("../assets/alize-mountain.jpg")}/>
    </View>
    
  )
}

export default LoadingScreen