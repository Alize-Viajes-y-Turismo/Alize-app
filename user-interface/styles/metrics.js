import { Dimensions } from "react-native";

const baseWidth = 480;
const baseHeiht = 854;

const currentWidth = Dimensions.get("window").width;
const currentHeight = Dimensions.get("window").height;

export function horizontalScale(pixelValue) {
    return (currentWidth/baseWidth) * pixelValue;
} 

export function verticalScale(pixelValue) {
    return (currentHeight/baseHeiht) * pixelValue;
} 
