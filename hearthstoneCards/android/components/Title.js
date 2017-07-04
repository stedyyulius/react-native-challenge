import React,{Component} from 'react'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

class Title extends Component{
  render(){
    return(
      <View>
        <Text style={styles.title}>
        Hearthstone Cards
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
  },
});

export default Title
