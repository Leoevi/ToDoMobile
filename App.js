import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './pages/SignIn';
import Main from './pages/Main';
import Credit from './pages/Credit';
import SignOut from './pages/SignOut';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="main">
        <Stack.Screen name="sign-in" component={SignIn} />
        <Stack.Screen name="main" component={Main} />
        <Stack.Screen name="credit" component={Credit} />
        <Stack.Screen name="sign-out" component={SignOut} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
