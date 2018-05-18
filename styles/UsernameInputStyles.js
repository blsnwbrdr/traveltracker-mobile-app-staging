import { StyleSheet } from 'react-native';
import { colorAqua, colorBlue, colorLightGrey, colorDarkGrey } from './Constants';

const UsernameInputStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colorBlue,
  },
  input: {
    margin: 20,
    borderColor: colorLightGrey,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRadius: 2,
    padding: 10,
    color: colorDarkGrey,
  }
});

export default UsernameInputStyles;
