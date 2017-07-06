const initialState = []

export default (state = initialState,action) =>{
    if(action.type === 'CHANGE CARDS' || action.type === 'CLEAR'){
      return action.payload
    }
    else{
      return state
    }
}
