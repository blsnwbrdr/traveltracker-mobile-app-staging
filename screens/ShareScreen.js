import React, { Component } from 'react';
import { AsyncStorage, SafeAreaView, StatusBar, ScrollView, View, Text } from 'react-native';

// STYLES
import ShareStyles from './../styles/ShareStyles';

export default class ShareScreen extends Component {

  render() {
    return(
      <SafeAreaView style={ShareStyles.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView style={ShareStyles.scrollContainer}>
          <Text>Sharing</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
