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
    height: '45%',
    backgroundColor: '#03113c',
    //borderTopWidth: 30,
    paddingTop: 8,
    paddingBottom: 16,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 346,
    position: 'absolute',
    zIndex: 4,
    //marginBottom: 56
  },
  outsideComponent_Login: {
    //position: 'absolute',
    width: 192,
    height: 242,
    backgroundColor: '#03113c',
    //borderTopWidth: 30,
    //borderLeftWidth: 10,
    borderTopLeftRadius: 25,
    //borderTopRightRadius: 25,
    marginTop: 72,
    marginRight: 178,
    paddingTop: 16,
    alignItems: 'center',
    opacity: 0.5,
    //marginBottom: 56
  },
  outsideComponent_Register: {
    //position: 'absolute',
    width: 200,
    height: 242,
    backgroundColor: '#03113c',
    //borderTopWidth: 30,
    //borderLeftWidth: 10,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -242,
    marginLeft: 170,
    paddingTop: 16,
    alignItems: 'center',
    zIndex: 3,
    //marginBottom: 56
  },
});
