import { StyleSheet } from 'react-native';
import { colorAqua, colorBlue, colorLightGrey } from './Constants';

const MyListStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colorBlue,
  },
  scrollContainer: {
    backgroundColor: colorAqua,
  },
  countContainer: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: colorAqua,
  },
  countText: {
    fontFamily: 'titillium-web',
    fontSize: 20,
    color: colorBlue,
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 30,
    paddingRight: 30,
  },
  country: {
    fontFamily: 'titillium-web',
    fontSize: 18,
    color: colorLightGrey,
    textAlign: 'center',
    paddingBottom: 5,
  },
});

export default MyListStyles;
