import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  },
  logoWrapper: {
    marginTop: 40,
    alignItems: 'center',
  },
  logo: {
    width: 173,
    height: 193.6,
    paddingTop: 16,
  },
  insideComponent_FormWrapper: {
    width: '90%',
    height: '40%',
    backgroundColor: '#03113c',
    //borderTopWidth: 30,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 346,
    position: 'absolute',
    zIndex: 4,
    //marginBottom: 56
  },
  outsideComponent_login: {
    //position: 'absolute',
    width: 185,
    height: 242,
    backgroundColor: '#03113c',
    //borderTopWidth: 30,
    //borderLeftWidth: 10,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 72,
    marginRight: 185,
    paddingTop: 16,
    alignItems: 'center',
    zIndex: 3,
    //marginBottom: 56
  },
  outsideComponent_Register: {
    //position: 'absolute',
    width: 208,
    height: 242,
    backgroundColor: '#03113c',
    //borderTopWidth: 30,
    //borderLeftWidth: 10,
    //borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -242,
    marginLeft: 162,
    paddingTop: 16,
    alignItems: 'center',
    opacity: 0.5,
    //marginBottom: 56
  },
});
