import React, { Component } from 'react';
import { NetInfo, AsyncStorage, SafeAreaView, StatusBar, ScrollView, FlatList, View, Text, Picker } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { CheckBox } from 'react-native-elements';

// COMPONENTS
import Header from './../components/Header';
import Footer from './../components/Footer';

// STYLES
import CountryListStyles from './../styles/CountryListStyles';

// STYLE CONSTANTS
import { colorAqua, colorBlue } from './../styles/Constants';

// JSON DATA
const countryData = require('./../data/countries.json');

// SORT COUNTRY LIST
function compare(a,b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}
countryData.sort(compare);

export default class CountryListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      selectedData: countryData,
      selectedContinent: '',
    };
  }

  // CHECK INTERNET CONNECTION AND GET STORED LIST OF CHECKED COUNTRIES
  componentDidMount = () => {
    this.checkConnection();
    // AsyncStorage.clear()
    AsyncStorage.getItem('Visited', (err,result) => {
      const visitedData = JSON.parse(result);
      const {checked} = this.state;
      let list = [];
      if (visitedData !== null) {
        for (x = 0; x < visitedData.checked.length; x++) {
          list.push(visitedData.checked[x]);
        }
        this.setState({
          checked: list
        });
      }
    });
  }

  // CHECK CONNECTION TO INTERNET
  checkConnection = () => {
    NetInfo.isConnected.fetch()
      .then( () => {
        NetInfo.isConnected.addEventListener('connectionChange', (isConnected) => {
          console.log(isConnected)
          const passParam = NavigationActions.setParams({
            params: { connection: isConnected },
            key: 'Sharing',
          });
          this.props.navigation.dispatch(passParam);
        });
      });
  }

  // DISPLAY LIST OF COUNTRIES BASED ON CONTINENT SELECTED
  displaySelectedData = (continent) => {
    this.setState({
      selectedContinent: continent
    });
    let list = [];
    if (continent !== 'All') {
      for (x = 0; x < countryData.length; x++) {
        if (continent === countryData[x].continent) {
          list.push(countryData[x]);
        }
      }
      this.setState({
        selectedData: list
      });
    } else {
      this.setState({
        selectedData: countryData
      });
    }
  }

  // SAVE CHECKED COUNTRIES TO LOCAL STORAGE
  saveChecked = () => {
    const {checked} = this.state;
    AsyncStorage.setItem('Visited', JSON.stringify({checked}), () => {
    });
  }

  // SET COUNTRY AS CHECKED WHEN PRESSED
  onPressSetChecked = (name) => {
    const {checked} = this.state;
    if(!checked.includes(name)) {
      this.setState({checked: [...checked, name]}, () => {
        this.saveChecked();
      });
    } else {
      this.setState({checked: checked.filter(a => a !== name)}, () => {
        this.saveChecked();
      });
    }
  }

  render() {
    return (
      <SafeAreaView style={CountryListStyles.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView style={CountryListStyles.scrollContainer}>
          <Header />
          <Picker
            selectedValue={this.state.selectedContinent}
            style={CountryListStyles.picker}
            itemStyle={CountryListStyles.pickerItem}
            onValueChange={(itemValue, itemIndex) => this.displaySelectedData(itemValue) }>
            <Picker.Item label="All" value="All" />
            <Picker.Item label="Africa" value="Africa" />
            <Picker.Item label="Antarctica" value="Antarctica" />
            <Picker.Item label="Asia" value="Asia" />
            <Picker.Item label="Europe" value="Europe" />
            <Picker.Item label="North America" value="North America" />
            <Picker.Item label="Oceania" value="Oceania" />
            <Picker.Item label="South America" value="South America" />
          </Picker>
          <FlatList
            data = {this.state.selectedData}
            extraData = {this.state}
            keyExtractor = {(x, i) => i.toString()}
            renderItem = { ({item}) =>
              <CheckBox
                containerStyle={CountryListStyles.listButton}
                textStyle={CountryListStyles.listButtonText}
                center
                iconRight
                uncheckedIcon='square-o'
                uncheckedColor='#6BB7C1'
                checkedIcon='check-square-o'
                checkedColor='#6BB7C1'
                title = {item.name}
                onPress = { () => this.onPressSetChecked(item.name) }
                checked = {this.state.checked.includes(item.name)}
              />
            }
          />
          <Footer />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
