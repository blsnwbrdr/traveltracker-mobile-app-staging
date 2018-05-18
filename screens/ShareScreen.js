import React, { Component } from 'react';
import { AsyncStorage, SafeAreaView, StatusBar, TextInput, ScrollView, TouchableOpacity, View, Text } from 'react-native';

// COMPONENTS
import UsernameInput from './../components/UsernameInput';

// STYLES
import ShareStyles from './../styles/ShareStyles';

export default class ShareScreen extends Component {
  constructor(props) {
    super(props);
    this.usernameInputChange = this.usernameInputChange.bind(this);
    this.onPressSubmitUsername = this.onPressSubmitUsername.bind(this);
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
      const username = JSON.stringify({name:this.state.usernameInputText})
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
              <Text style={ShareStyles.usernameText}>{this.state.username}</Text>
            )
          }
        </ScrollView>
      </SafeAreaView>
    );
  }
}
