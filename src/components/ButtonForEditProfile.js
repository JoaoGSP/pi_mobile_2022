/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function ButtonForEditProfile(props) {
  return (
    <>
      <Pressable
        onPress={() => {
          props.func(props.routeName);
        }}
        style={({pressed}) => [
          pressed ? styles.buttonWrpperPressed : styles.buttonWrpperStatic,
        ]}>
        {({pressed}) =>
          pressed
            ? [
                <>
                  <Icon name={props.leftIconName} size={20} color="#6DECF2" />
                  <Text style={{color: '#6DECF2', fontSize: 16}}>
                    {props.buttonLabel}
                  </Text>
                  <Icon name="right" size={20} color="#6DECF2" />
                </>,
              ]
            : [
                <>
                  <Icon name={props.leftIconName} size={20} color="white" />
                  <Text style={{color: 'white', fontSize: 16}}>
                    {props.buttonLabel}
                  </Text>
                  <Icon name="right" size={20} color="white" />
                </>,
              ]
        }
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  buttonWrpperStatic: {
    width: '90%',
    height: '24%',
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  buttonWrpperPressed: {
    width: '90%',
    height: '24%',
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#6DECF2',
  },
});
