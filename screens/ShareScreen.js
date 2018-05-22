import React, { Component } from 'react';
import { AsyncStorage, SafeAreaView, StatusBar, TextInput, ScrollView, TouchableOpacity, View, Text } from 'react-native';

// COMPONENTS
import UsernameInput from './../components/UsernameInput';
import UsernameAndShare from './../components/UsernameAndShare';
import Search from './../components/Search';

// STYLES
import ShareStyles from './../styles/ShareStyles';

export default class ShareScreen extends Component {
  constructor(props) {
    super(props);
    this.usernameInputChange = this.usernameInputChange.bind(this);
    this.onPressSubmitUsername = this.onPressSubmitUsername.bind(this);
    this.onPressShare = this.onPressShare.bind(this);
    this.searchInputChange = this.searchInputChange.bind(this);
    this.onPressSubmitSearch = this.onPressSubmitSearch.bind(this);
    this.state = {
      usernameInputDisplay: false,
      usernameInputText: '',
      usernameResponse: '',
      username: '',
      shareResponse: '',
      searchInputText: '',
      searchResultList: [],
    }
  }

  componentDidMount = () => {
    // AsyncStorage.clear()
    AsyncStorage.getItem('Username', (err, result) => {
      if (result != null) {
        this.setState({
          username: result,
        });
      } else {
        this.setState({
          usernameInputDisplay: true,
        });
      }
    });
  }

  // USERNAME INPUT CHANGE FUNCTION
  usernameInputChange(input) {
    this.setState({
      usernameInputText: input
    });
  }

  // SUBMIT USERNAME
  onPressSubmitUsername() {
    if (this.state.usernameInputText !== '') {
      const username = JSON.stringify({username:this.state.usernameInputText})
      fetch('http://localhost:5000/traveltracker/add/username', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: username,
      })
        .then((res) => {
          this.setState({
            usernameResponse: res._bodyText
          });
          if (res._bodyText === 'Username added') {
            AsyncStorage.setItem('Username', this.state.usernameInputText, () => {
            });
            this.setState({
              usernameInputDisplay: false,
              username: this.state.usernameInputText,
            });
          }
        })
    }
  }

  // SHARE LIST
  onPressShare() {
    const username = JSON.stringify({username:this.state.username})
    AsyncStorage.getItem('Visited', (err, result) => {
      const visitedData = `[${username},${result}]`;
      fetch('http://localhost:5000/traveltracker/update', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: visitedData,
      })
        .then((res) => {
          this.setState({
            shareResponse: res._bodyText
          });
          setTimeout( () => {
            this.setState({
              shareResponse: ''
            })
          }, 2000);
        })
    });
  }

  // SEARCH INPUT CHANGE FUNCTION
  searchInputChange(input) {
    this.setState({
      searchInputText: input
    });
  }

  // SUBMIT SEARCH
  onPressSubmitSearch() {
    if (this.state.searchInputText !== '') {
      console.log(this.state.searchInputText);
      this.setState({
        searchResultList: ''
      });
      fetch(`http://localhost:5000/traveltracker/search/username/${this.state.searchInputText}`)
        .then(res => res.json())
        .then(
          (result) => {
            if (result.length > 0) {
              console.log(result[0].checked);
              this.setState({
                searchResultList: result[0].checked
              });
            }
          }
        )
    }
  }

  render() {
    const usernameInputDisplay = this.state.usernameInputDisplay;
    return(
      <SafeAreaView style={ShareStyles.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView style={ShareStyles.scrollContainer}>
          {
            usernameInputDisplay ? (
              <UsernameInput
                usernameInputChange={this.usernameInputChange}
                onPressSubmitUsername={this.onPressSubmitUsername}
                usernameResponse={this.state.usernameResponse}
               />
            ) : (
              <UsernameAndShare
                username={this.state.username}
                onPressShare={this.onPressShare}
                shareResponse={this.state.shareResponse}
              />
            )
          }
          <Search
            searchInputChange={this.searchInputChange}
            onPressSubmitSearch={this.onPressSubmitSearch}
          />
          <View>
            <Text>{this.state.searchResultList}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
