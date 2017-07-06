const initialState = []

export default (state=initialState,action)=>{
  if(action.type === "CHANGE CARD"){
    return action.payload
  }
  else{
    return state
  }
}
