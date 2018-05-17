import React, { Component } from 'react';
import { AsyncStorage, SafeAreaView, StatusBar, TextInput, ScrollView, TouchableOpacity, View, Text } from 'react-native';

// STYLES
import ShareStyles from './../styles/ShareStyles';

export default class ShareScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInput: '',
      response: '',
    }
  }

  // USERNAME INPUT FUNCTION
  usernameInput(usernameInput) {
    // console.log(usernameInput);
    this.setState({
      usernameInput: usernameInput
    });
  }

  // SUBMIT USERNAME
  onPressSubmitUsername() {
    const username = JSON.stringify({name:this.state.usernameInput})
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
          <TextInput
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='Create Username'
            clearButtonMode='always'
            maxLength={12}
            returnKeyType='send'
            onChangeText={(usernameInput) => this.usernameInput(usernameInput)}
            onSubmitEditing={() => this.onPressSubmitUsername()}
          />
          <Text>{this.state.response}</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
