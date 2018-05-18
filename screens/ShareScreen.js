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
      usernameInputText: '',
      response: '',
    }
  }

  // USERNAME INPUT CHANGE FUNCTION
  usernameInputChange(input) {
    this.setState({
      usernameInputText: input
    });
  }

  // SUBMIT USERNAME
  onPressSubmitUsername() {
    const username = JSON.stringify({name:this.state.inputText})
    fetch('http://localhost:5000/traveltracker/add/username', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: username,
    })
      .then((res) => {
        console.log(res._bodyText)
        this.setState({
          response: res._bodyText
        })
      })
  }

  render() {
    return(
      <SafeAreaView style={ShareStyles.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView style={ShareStyles.scrollContainer}>
          <UsernameInput
            usernameInputChange={this.usernameInputChange}
            onPressSubmitUsername={this.onPressSubmitUsername}
           />
          <Text>{this.state.response}</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
