import axios from 'axios'

const getCards = (expansion) =>{
  return(dispatch)=>{
    axios.get('https://omgvamp-hearthstone-v1.p.mashape.com/cards',{
      headers:{'X-Mashape-Key': 'sSWJykoWUAmshrcHV4HoH14n0KBfp1bcI0njsn8giOXI1ONRQ8'}})
      .then(response=>{
        dispatch({
          type: `CHANGE CARDS`,
          payload: response.data[expansion]
          })
        })
      .catch(err=>{
        console.log(err);
      })
  }
}

const getSingleCard = (id)=>{
  return (dispatch) =>{
  axios.get(`https://omgvamp-hearthstone-v1.p.mashape.com/cards/${id}`,{
    headers:{"X-Mashape-Key":"sSWJykoWUAmshrcHV4HoH14n0KBfp1bcI0njsn8giOXI1ONRQ8"}})
    .then(response=>{
      dispatch({
        type: `CHANGE CARD`,
        payload: response.data[0]
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }
}

export{
  getSingleCard,getCards
}
