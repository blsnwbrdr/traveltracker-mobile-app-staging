import { StyleSheet } from 'react-native';
import { colorAqua, colorBlue, colorDarkGrey, colorLightGrey } from './Constants';

const UsernameAndShareStyles = StyleSheet.create({
  usernameText: {
    fontFamily: 'titillium-web',
    fontSize: 20,
    color: colorBlue,
    textAlign: 'center',
    padding: 10,
  },
  shareButtonContainer: {
    alignItems: 'center',
  },
  shareButton: {
    borderWidth: 1,
    borderColor: colorLightGrey,
    borderRadius: 3,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
  },
  shareText: {
    fontFamily: 'titillium-web',
    fontSize: 16,
    color: colorLightGrey,
    textAlign: 'center',
  },
  shareIcon: {
    color: colorLightGrey,
    paddingTop: 5,
    paddingLeft: 10,
  },
  responseContainer: {
  },
  responseText: {
    fontFamily: 'titillium-web',
    fontSize: 16,
    color: colorDarkGrey,
    padding: 10,
    textAlign: 'center',
  }
});

export default UsernameAndShareStyles;
