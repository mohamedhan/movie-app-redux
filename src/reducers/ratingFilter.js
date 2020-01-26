// import {RATING_Filter} from '../constants/actionTypes'
// // action example: {type: 'SET_RATING_FILTER', rating: 5}

// const ratingFilter=(state=0,action)=>{
//     if(action.type===RATING_Filter){
//         return action.rating
//     }
//     return state
// }
// export default ratingFilter
// import { RATING_FILTER} from '../actions/actionTypes';
const initState=0
const ratingFilter=(state=initState,action)=>{
  switch(action.type){
      case "RATING_FILTER":
        return action.payload
      default: return state;
  }

}
export default ratingFilter