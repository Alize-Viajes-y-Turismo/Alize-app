import { createStackNavigator } from '@react-navigation/stack';

 const Stack = createStackNavigator();

 export default function StackComponent() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Olvide mi contraseña" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}