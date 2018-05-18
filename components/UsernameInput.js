import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

// STYLES
import UsernameInputStyles from './../styles/UsernameInputStyles';

export default class UsernameInput extends Component {

  render() {
    return (
      <TextInput
        style={UsernameInputStyles.input}
        autoCorrect={false}
        autoCapitalize='none'
        placeholder='Create Username'
        clearButtonMode='always'
        maxLength={12}
        returnKeyType='send'
        onChangeText={(usernameInputText) => this.props.usernameInputChange(usernameInputText)}
        onSubmitEditing={() => this.props.onPressSubmitUsername()}
      />
    );
  }
}
