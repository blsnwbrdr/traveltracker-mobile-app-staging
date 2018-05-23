import React, { Component } from 'react';
import { TextInput, FlatList, View, Text } from 'react-native';

// STYLES
import SearchStyles from './../styles/SearchStyles';

export default class Search extends Component {

  render() {
    return (
      <View>
        <Text style={SearchStyles.header}>Search Users</Text>
        <TextInput
          style={SearchStyles.input}
          autoCorrect={false}
          autoCapitalize='none'
          placeholder='Search'
          clearButtonMode='always'
          maxLength={12}
          returnKeyType='go'
          onChangeText={(searchInputText) => this.props.searchInputChange(searchInputText)}
          onSubmitEditing={() => this.props.onPressSubmitSearch()}
        />
        {
          this.props.searchResultsHeader ? (
            <Text style={SearchStyles.header}>{this.props.searchResultsUsername} has visited {this.props.searchResultListCount} countries/territories.</Text>
          ) : (
            <Text></Text>
          )
        }
        <FlatList
          data = {this.props.searchResultList}
          extraData = {this.state}
          keyExtractor = {(x, i) => i}
          renderItem = { ({item}) =>
            <Text style={SearchStyles.list}>
              {item}
            </Text>
          }
        />
      </View>
    )
  }
}
