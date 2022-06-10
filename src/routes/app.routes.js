/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {Pressable, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

//Custom
import CustomDrawer from '../components/CustomDrawer';

//Pages
import HomePage from '../pages/HomePage/Index';
import Market from '../pages/Market/Index';
import EditProfile from '../pages/EditProfile/Index';

//Contexts
import AuthContext from '../contexts/auth';

const AppDrawer = createDrawerNavigator();

export default function AppRoutes() {
  const {showAlertForSignOut} = useContext(AuthContext);
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
          <Pressable onPress={() => showAlertForSignOut(true)}>
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
