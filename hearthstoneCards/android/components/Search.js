import React, {Component} from 'react'
import axios from 'axios'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Picker,
  Image
} from 'react-native'

class Search extends Component {
  constructor(props){
    super(props)
    this.state={
      expansion: "Select Expansion",
      cards: []
    }
  }
  render(){
    return(
      <View style={styles.select}>
        <Picker
          selectedValue={this.state.expansion}
          onValueChange={(itemValue, itemIndex) => this.selectedExpansion(itemValue)}>
          <Picker.Item label="Select Expansion" option="disabled" value="Select Expansion" />
          <Picker.Item label="Basic" value="Basic" />
          <Picker.Item label="Blackrock Mountain" value="Blackrock Mountain" />
          <Picker.Item label="Classic" value="Classic" />
          <Picker.Item label="Journey to Un'Goro" value="Journey to Un'Goro" />
          <Picker.Item label="Goblin vs Gnomes" value="Goblin vs Gnomes" />
          <Picker.Item label="Mean Streets of Gadgetzan" value="Mean Streets of Gadgetzan" />
          <Picker.Item label="Naxxramas" value="Naxxramas" />
          <Picker.Item label="One Night in Karazhan" value="One Night in Karazhan" />
          <Picker.Item label="The Grand Tournament" value="The Grand Tournament" />
          <Picker.Item label="The League of Explorers" value="The League of Explorers" />
          <Picker.Item label="Whispers of the Old Gods" value="Whispers of the Old Gods" />
        </Picker>
        <ScrollView>
          <View>
          { this.state.cards.map((card,index)=> {
            return (card.imgGold !== null) ? <Image source={{ uri: card.imgGold }} style={{width:300,height:390,margin:20}} /> : <Text>{card.name}</Text>
          })}
        </View>
        </ScrollView>
      </View>

    )
  }
  selectedExpansion(expansion){
    axios.get('https://omgvamp-hearthstone-v1.p.mashape.com/cards',{
      headers:{'X-Mashape-Key': 'sSWJykoWUAmshrcHV4HoH14n0KBfp1bcI0njsn8giOXI1ONRQ8'}})
      .then(response=>{
            console.log(JSON.stringify(response.data[expansion][0]));
          this.setState({
            cards: response.data[expansion],
            expansion: expansion
          })
        })
      .catch(err=>{
        console.log(`err`);
        console.log(err);
      })
      console.log(this.state.cards);
    }

    componentWillMount(){
      console.log(`masuk will mount`);
    }
  }

const styles = StyleSheet.create({
  select:{
    textAlign:'center'
  },
  cards:{
    textAlign:'center',
    width: 300,
    height: 240,
    margin: 'auto'
  }
})

export default Search
