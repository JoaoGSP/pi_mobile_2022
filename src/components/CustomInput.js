/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

//Dev components and providers
import {Controller} from 'react-hook-form';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function CustomInput({
  inputTitle,
  iconName,
  key,
  keyboardType,
  placeholder,
  secureTextEntry,
  autoCapitalize,
  name,
  control,
  rules = {},
}) {
  const [isFocused, setIsFocused] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }
  function handleInputBlur() {
    setIsFocused(false);
  }

  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
          <View>
            <Text style={styles.inputTitle}>{inputTitle}</Text>
            <View
              style={
                isFocused
                  ? styles.inputWrapperFocused
                  : styles.inputWrapperStatic
              }>
              <AntDesign
                name={iconName}
                size={16}
                color={isFocused ? '#6DECF2' : '#C4C4C4'}
                style={styles.iconField}
              />
              <TextInput
                key={Math.random()}
                style={styles.inputField}
                onFocus={() => handleInputFocus()}
                onBlur={handleInputBlur}
                onEndEditing={onBlur}
                onChangeText={onChange}
                autoCapitalize={autoCapitalize}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                value={value}
              />
            </View>
            {error && (
              <Text
                style={{
                  color: '#ff5454',
                  alignSelf: 'center',
                  textAlign: 'center',
                }}>
                {error.message}
              </Text>
            )}
          </View>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  inputTitle: {
    marginTop: 8,
    color: 'white',
    alignSelf: 'center',
  },
  inputWrapperStatic: {
    width: 324,
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    backgroundColor: '#03113c',
    opacity: 0.5,
    borderBottomWidth: 2,
    borderColor: '#C4C4C4',
  },
  inputWrapperFocused: {
    width: 324,
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    backgroundColor: '#03113c',
    opacity: 0.5,
    borderBottomWidth: 2,
    borderColor: '#6DECF2',
  },
  inputField: {
    padding: 10,
  },
  iconField: {
    paddingLeft: 16,
  },
});
