/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Title from './android/components/Title.js'
import Search from './android/components/Search.js'
import ListCards from './android/components/ListCards.js'

export default class hearthstoneCards extends Component {
  render() {
    return (
      <View>
          <Title />
          <Search />
      </View>
    );
  }
}



AppRegistry.registerComponent('hearthstoneCards', () => hearthstoneCards);
