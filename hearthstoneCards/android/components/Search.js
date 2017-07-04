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
      cards: [],
      isLoading: false
    }
  }
  render(){
    return(
      <View>
        <Picker
          selectedValue={this.state.expansion}
          onValueChange={(itemValue, itemIndex) => this.selectedExpansion(itemValue)}>
          <Picker.Item label="Select Expansion" value="Select Expansion" />
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
          <View style={styles.flexboxContainer}>
          {(this.state.isLoading === true)
          ?<Image source={{ uri: 'http://regex.info/i/jpgqual/loading.png' }} style={{width:200,height:200}} />
          :this.state.cards.map((card,index)=> {
            return (card.imgGold !== null) ? <Image key={card.cardId} source={{ uri: card.imgGold }} style={styles.cards} /> : <Text>{card.name}</Text>
          })}
        </View>
        </ScrollView>
      </View>

    )
  }

  cards(cards){
    this.setState({
      cards: cards,
      isLoading:false
    })
  }

  loading(status,expansion){
    console.log(`masuk loading`);
    this.setState({
      isLoading: status,
      expansion: expansion
    })
    console.log(this.state.isLoading);
  }

  selectedExpansion(expansion){
    this.loading(true,expansion)
    console.log(this.state.cards.length);
    axios.get('https://omgvamp-hearthstone-v1.p.mashape.com/cards',{
      headers:{'X-Mashape-Key': 'sSWJykoWUAmshrcHV4HoH14n0KBfp1bcI0njsn8giOXI1ONRQ8'}})
      .then(response=>{
        console.log(`masuk response data`);
          this.cards(response.data[expansion])
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
  flexboxContainer:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  cards:{
    width:120,
    height: 200,
    margin: 5
  }

})

export default Search
