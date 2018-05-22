import React, { Component } from 'react';
import { AsyncStorage, SafeAreaView, StatusBar, TextInput, ScrollView, TouchableOpacity, View, Text } from 'react-native';

// COMPONENTS
import UsernameInput from './../components/UsernameInput';
import UsernameAndShare from './../components/UsernameAndShare';

// STYLES
import ShareStyles from './../styles/ShareStyles';

export default class ShareScreen extends Component {
  constructor(props) {
    super(props);
    this.usernameInputChange = this.usernameInputChange.bind(this);
    this.onPressSubmitUsername = this.onPressSubmitUsername.bind(this);
    this.onPressShare = this.onPressShare.bind(this);
    this.state = {
      usernameInputDisplay: false,
      usernameInputText: '',
      usernameResponse: '',
      username: '',
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
        // .then(res) => {
        //
        // }
    });
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
              />
            )
          }

        </ScrollView>
      </SafeAreaView>
    );
  }
}
