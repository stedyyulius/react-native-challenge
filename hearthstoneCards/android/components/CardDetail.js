import React,{Component} from 'react'
import {connect} from 'react-redux'

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Picker,
  Image
} from 'react-native'

class CardDetail extends Component{
  static navigationOptions = {
    title: "Card Details"
  }
  constructor(props){
    super(props)
    this.state = {
      card: this.props.navigation.state.params.card
    }
  }
  render(){
    console.log(this.props);
    return(
      <View>
        {(this.state.card.length === 0) ? (<Text>loading</Text>)
        : (<View><Image
          source={{uri:this.state.card.imgGold || ""}}
          style={{width:300, height:410,marginTop:-10}} />
        <Text>Name: {this.state.card.name}</Text>
        <Text>Effect: {this.state.card.text}</Text>
        <Text>Artist: {this.state.card.artist}</Text></View>)
        }
      </View>
    )
  }
}
// const mapStateToProps = (state) =>{
//   return{
//     card: state.card
//   }
// }

export default CardDetail
