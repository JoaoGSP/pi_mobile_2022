/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {Pressable, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

//Custom
import CustomDrawer from '../components/CustomDrawer';

//Pages
import HomePage from '../pages/HomePage/Index';
import Market from '../pages/Market/Index';
import Index from '../pages/EditProfile/Index';
import EditName from '../pages/EditProfile/EditName';
import ChangeEmail from '../pages/EditProfile/ChangeEmail';
import ChangePassword from '../pages/EditProfile/ChangePassword';

//Contexts
import AuthContext from '../contexts/auth';

const AppDrawer = createDrawerNavigator();
const AppStack = createNativeStackNavigator();

export default function AppRoutes() {
  const {ShowAlertForSignOut} = useContext(AuthContext);

  function EditProfile() {
    return (
      <AppStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="EditProfileMain">
        <AppStack.Screen name="EditProfileMain" component={Index} />
        <AppStack.Screen name="EditName" component={EditName} />
        <AppStack.Screen name="ChangeEmail" component={ChangeEmail} />
        <AppStack.Screen name="ChangePassword" component={ChangePassword} />
      </AppStack.Navigator>
    );
  }

  return (
    <AppDrawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: '#03113c',
        drawerActiveTintColor: '#6DECF2',
        drawerInactiveTintColor: 'black',
        drawerLabelStyle: {marginLeft: -25, fontSize: 15},
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerRight: () => (
          <Pressable onPress={() => ShowAlertForSignOut(true)}>
            {({pressed}) =>
              pressed
                ? [
                    <View style={{marginRight: 16}}>
                      <Ionicons name="exit-outline" size={25} color="#6DECF2" />
                    </View>,
                  ]
                : [
                    <View style={{marginRight: 16}}>
                      <Ionicons name="exit-outline" size={25} color="white" />
                    </View>,
                  ]
            }
          </Pressable>
        ),
        headerStyle: {backgroundColor: '#03113c'},
      }}>
      <AppDrawer.Screen
        name="Página Inicial"
        component={HomePage}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <AppDrawer.Screen
        name="Editar Perfil"
        component={EditProfile}
        options={{
          drawerIcon: ({color}) => (
            <Feather name="edit" size={22} color={color} />
          ),
        }}
      />
      <AppDrawer.Screen
        name="Mercado"
        component={Market}
        options={{
          drawerIcon: ({color}) => (
            <Feather name="shopping-cart" size={22} color={color} />
          ),
        }}
      />
    </AppDrawer.Navigator>
  );
}
