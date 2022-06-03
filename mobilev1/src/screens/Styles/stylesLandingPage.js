import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  logoWrapper: {
    paddingTop: 150,
    alignItems: 'center',
  },
  logo: {
    width: 210,
    height: 235,
    paddingTop: 27,
  },
  buttonWrapper: {
    paddingHorizontal: 16,
    paddingTop: 176,
    alignItems: 'center',
  },
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
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
    backgroundColor: '#03113c',
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
