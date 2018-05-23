import { StyleSheet } from 'react-native';
import { colorAqua, colorBlue, colorLightGrey } from './Constants';

const SearchStyles = StyleSheet.create({
  header: {
    fontFamily: 'titillium-web',
    fontSize: 16,
    color: colorBlue,
    textAlign: 'center',
    padding: 5,
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
  list: {
    fontFamily: 'titillium-web',
    color: colorLightGrey,
    fontSize: 18,
    paddingBottom: 5,
    textAlign: 'center',
  }
});

export default SearchStyles;
