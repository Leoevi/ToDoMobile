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

export const AuthContext = React.createContext();

export default function App() {
  // https://react.dev/learn/passing-data-deeply-with-context
  // https://www.robcallaghan.co.uk/blog/understanding-the-react-context-api-usecontext-hook/
  // https://reactnavigation.org/docs/auth-flow#implement-the-logic-for-restoring-the-token
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      console.log(action.token);
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        // userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);
  
  const authCtx = React.useMemo(() => ({
      signIn: async (data) => {
        // We would sent credentials to server here
        dispatch({type: "SIGN_IN", token: "dummy-auth-token"});
      },
      signOut: () => {
        dispatch({type: "SIGN_OUT"});
      },
    }), []);

  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  // "Protected Routes" pattern https://reactnavigation.org/docs/auth-flow#how-it-will-work
  return (
    <AuthContext.Provider value={authCtx}>
      <NavigationContainer>
          { state.userToken != null ? 
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
      </NavigationContainer>
    </AuthContext.Provider>
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
