import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

{
  /*Custom*/
}
import CustomDrawer from '../components/CustomDrawer';
{
  /*Pages*/
}
import HomePage from '../screens/HomePage';
import Market from '../screens/Market';
import EditProfile from '../screens/EditProfile';

//import Debug from '../screens/Debug';

const AppDrawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <AppDrawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#03113c',
        drawerActiveTintColor: '#6DECF2',
        drawerInactiveTintColor: 'black',
        drawerLabelStyle: {marginLeft: -25, fontSize: 15},
      }}>
      <AppDrawer.Screen
        name="HomePage"
        component={HomePage}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <AppDrawer.Screen
        name="Market"
        component={Market}
        options={{
          drawerIcon: ({color}) => (
            <Feather name="shopping-cart" size={22} color={color} />
          ),
        }}
      />
      <AppDrawer.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          drawerIcon: ({color}) => (
            <Feather name="edit" size={22} color={color} />
          ),
        }}
      />
    </AppDrawer.Navigator>
  );
}
//<AppStack.Screen name='Debug' component={Debug} />
//initialRouteName='HomePage'>
