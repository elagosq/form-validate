import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Home from './screens/Home';

export default () => {
  const Stack = createStackNavigator();
  const { isSignedIn } = useSelector(state => state.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isSignedIn ? (
        <>  
          <Stack.Screen name="Login"  component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </>
        ):(  
          <Stack.Screen name="Home"   component={Home} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

