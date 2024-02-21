import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from './screens/Login';
import User_Home from './screens/User_Home';
import Admin_SignUp from './screens/Admin_SignUp';
import User_login from './screens/User_login';
import Admin_dashboard from './screens/Admin_dashboard';

export type RootStackParamList ={
  Login : undefined,
  User_Home :undefined,
  Admin_SignUp:undefined,
  User_Login:undefined,
  Admin_dashboard:undefined
};

const stack =createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Login'>
        <stack.Screen 
          name='Login'
          component={Login}
          options={{ headerShown: false }}
        />
        <stack.Screen 
          name='Admin_SignUp'
          component={Admin_SignUp}
          options={{ headerShown: false }}
        />
        <stack.Screen 
          name='User_Login'
          component={User_login}
          options={{ headerShown: false }}
        />
        <stack.Screen 
          name='User_Home'
          component={User_Home}
          options={{
            title:'Report Issues'
          }}
        />
        <stack.Screen 
          name='Admin_dashboard'
          component={Admin_dashboard}
          options={{
            title:'Dashboard'
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
