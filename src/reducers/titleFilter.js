import { NAME_FILTER } from '../constants/actionTypes'





// // action example: {type: 'SET_TITLE_FILTER', title: 'incept'}

const initState=''

const titleFilter=(state=initState,action)=>{
  switch(action.type){
      case NAME_FILTER:
        return action.payload
      default: return state
  }

}
export default titleFilter