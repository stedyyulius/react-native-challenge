import {combineReducers} from 'redux'

import cardsReducers from './listCards-reducers.js'
import singleCardReducers from './singleCard-reducers.js'
import loading from './loading.js'

export default combineReducers({
  cards: cardsReducers,
  card: singleCardReducers,
  loading: loading
})
