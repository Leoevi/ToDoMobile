import 'react-native-gesture-handler';  // https://reactnavigation.org/docs/drawer-navigator/#installation
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './pages/SignIn';
import Main from './pages/Main';
import Credit from './pages/Credit';
import SignOut from './pages/SignOut';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';


export default function App() {
  let isSignedIn = true;
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  // "Protected Routes" pattern https://reactnavigation.org/docs/auth-flow#how-it-will-work
  return (
    <NavigationContainer>
      {/* <> */}
        { isSignedIn ? 
          (
            <Drawer.Navigator>
              <Drawer.Screen name="main" component={Main} options={{title: "ToDo"}}/>
              <Drawer.Screen name="credit" component={Credit} options={{title: "Credit"}} />
              <Drawer.Screen name="sign-out" component={SignOut} options={{title: "Sign Out"}}/>
            </Drawer.Navigator>
          ) : (
            <Stack.Navigator>
              <Stack.Screen name="sign-in" component={SignIn} options={{title: "Sign In"}} />
            </Stack.Navigator>
          )
        }
      {/* </> */}
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
