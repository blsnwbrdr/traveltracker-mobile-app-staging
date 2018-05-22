import { StyleSheet } from 'react-native';
import { colorAqua, colorBlue, colorLightGrey, colorDarkGrey } from './Constants';

const UsernameInputStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colorBlue,
  },
  input: {
    fontFamily: 'titillium-web',
    color: colorBlue,
    margin: 20,
    borderColor: colorLightGrey,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRadius: 3,
    padding: 10,
  },
  response: {
    fontFamily: 'titillium-web',
    fontSize: 16,
    color: colorBlue,
    textAlign: 'center',
    padding: 5,
  }
});

export default UsernameInputStyles;
