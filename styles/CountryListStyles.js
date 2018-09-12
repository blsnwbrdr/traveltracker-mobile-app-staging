import { StyleSheet } from 'react-native';
import { colorAqua, colorBlue, colorLightGrey } from './Constants';

const CountryListStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colorBlue,
  },
  scrollContainer: {
    backgroundColor: colorAqua,
  },
  headerButtonContainer: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  headerButton: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colorBlue,
    borderRadius: 4,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  headerButtonText: {
    fontFamily: 'titillium-web',
    fontSize: 18,
    color: colorBlue,
  },
  listButton: {
    backgroundColor: colorAqua,
    borderColor: colorBlue,
  },
  listButtonText: {
    color: colorLightGrey,
    fontFamily: 'titillium-web',
  },
});

export default CountryListStyles;
