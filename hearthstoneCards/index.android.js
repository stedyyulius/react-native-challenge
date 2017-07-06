/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Provider} from 'react-redux'


import store from './android/store/store.js'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


import {StackNavigator} from 'react-navigation'

import Title from './android/components/Title.js'
import Search from './android/components/Search.js'
import CardDetail from './android/components/CardDetail'


export default class hearthstoneCards extends Component {
  static navigationOptions = {
    title: "Hearthstone Cards"
  }
  render() {
    return (
        <Provider store={store}>
          <View>
            <Title />
            <Search navigation={this.props.navigation} />
          </View>
        </Provider>
    );
  }
}

const App = StackNavigator({
  hearthstoneCards: {screen:hearthstoneCards},
  CardDetail: { screen: CardDetail }
});



AppRegistry.registerComponent('hearthstoneCards', () => App);
