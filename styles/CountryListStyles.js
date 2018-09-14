import { StyleSheet } from 'react-native';
import { colorBlue, colorDarkGrey, colorAqua, colorMediumGrey } from './Constants';

const CountryListStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colorBlue,
  },
  scrollContainer: {
    backgroundColor: 'white',
  },
  picker: {
    height: 100,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colorMediumGrey,
    marginBottom: 20,
  },
  pickerItem: {
    height: 100,
    color: colorBlue,
    fontFamily: 'titillium-web',
    fontSize: 20,
  },
  listButton: {
    backgroundColor: 'white',
    borderColor: 'transparent',
    margin: 0,
  },
  listButtonText: {
    color: colorDarkGrey,
    fontFamily: 'titillium-web',
    fontSize: 18,
    paddingRight: 20,
  },
});

export default CountryListStyles;
