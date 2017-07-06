import React, {Component} from 'react'
import axios from 'axios'
import {connect,Provider} from 'react-redux'
import Spinner from 'react-native-loading-spinner-overlay'
import TimerMixin from 'react-timer-mixin';
import timer from 'react-native-timer'
import CardDetail from './CardDetail.js'

import {getSingleCard} from '../actions/index.js'
import {getCards} from '../actions/index.js'
import store from '../store/store.js'

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Picker,
  Image,
  TouchableOpacity,
  Modal,
  TouchableHighlight
} from 'react-native'

class Search extends Component {
  constructor(props){
    super(props)
    this.state={
      expansion: "Select Expansion",
      modalVisible: false,
      visible:true
    }
  }
  render(){
    const { dispatch, navigationState } = this.props
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
          <Picker.Item label="Goblins vs Gnomes" value="Goblins vs Gnomes" />
          <Picker.Item label="Mean Streets of Gadgetzan" value="Mean Streets of Gadgetzan" />
          <Picker.Item label="Naxxramas" value="Naxxramas" />
          <Picker.Item label="One Night in Karazhan" value="One Night in Karazhan" />
          <Picker.Item label="The Grand Tournament" value="The Grand Tournament" />
          <Picker.Item label="The League of Explorers" value="The League of Explorers" />
          <Picker.Item label="Whispers of the Old Gods" value="Whispers of the Old Gods" />
        </Picker>
        <ScrollView>
          <View style={styles.flexboxContainer}>
          {(this.state.expansion !== "Select Expansion" && this.props.cards.length === 0)
          ?<Spinner visible={this.state.visible} textContent={"Loading..."} textStyle={{color: 'black'}} />
          :this.props.cards.map((card,index)=> {
            return (card.imgGold !== null)
          ?<TouchableOpacity key={card.cardId} onPress={() =>
            this.clickedCard(card.cardId)
          }><Image key={card.cardId}
              source={{ uri: card.imgGold }}
              style={styles.cards}
               />
             </TouchableOpacity>
            : <Text>{card.name}</Text>
            })}
        </View>
        </ScrollView>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22}}>
          <View style={{flex:1}}>
            <Spinner visible={this.state.visible} textContent={"Loading..."} textStyle={{color: 'black'}} />
          </View>
         </View>
        </Modal>
      </View>
    )
  }

  clickedCard(id){
    this.props.getSingleCard(id)
      this.setState({modalVisible: true});
      setTimeout(()=>{
        this.setState({
          modalVisible:false
        })
        this.props.navigation.navigate("CardDetail", {card: this.props.card})
      },3000)
    }

  selectedExpansion(expansion){
    this.setState({
      expansion: expansion
    })
    if(expansion !== "Selected Expansion"){
          this.props.getCards(expansion)
      }
    }

    componentWillMount(){
      console.log(this.props.navigation);
    }
  }

  const mapStateToProps = (state)=>{
    return{
      cards: state.cards,
      card: state.card
    }
  }

  const mapDispatchToProps = (dispatch)=>{
    return{
      getCards: (expansion) => dispatch(getCards(expansion)),
      getSingleCard: (id) => dispatch(getSingleCard(id))
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
    width:113,
    height: 200,
    margin: 2
  }

})

export default connect(mapStateToProps,mapDispatchToProps)(Search)
