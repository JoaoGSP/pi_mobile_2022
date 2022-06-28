import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function RegularButton(props) {
  return (
    <>
      <Pressable
        onPress={() => {
          props.func();
        }}
        style={({pressed}) => [
          pressed ? styles.logButtonPressed : styles.logButtonStatic,
        ]}>
        {({pressed}) =>
          pressed
            ? [
                <Text style={styles.textButtonPressed}>{props.title}</Text>,
                <Icon
                  name={props.iconName}
                  size={16}
                  style={styles.textButtonPressed}
                />,
              ]
            : [
                <Text style={styles.textButtonStatic}>{props.title}</Text>,
                <Icon
                  name={props.iconName}
                  size={16}
                  style={styles.textButtonStatic}
                />,
              ]
        }
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  logButtonStatic: {
    width: 200,
    height: 52,
    borderWidth: 2,
    borderColor: '#03113c',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logButtonPressed: {
    width: 200,
    height: 52,
    borderRadius: 20,
    backgroundColor: '#03113c',
    elevation: 20,
    shadowColor: '#6DECF2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtonStatic: {
    color: 'black',
    padding: 1,
  },
  textButtonPressed: {
    color: 'white',
    padding: 1,
  },
});
