import { algsData } from "../consts/constants";

const defaultState = {
    selectedAlgo : algsData.AES,
    encRes: '2'
  }
 export const reducer =  (state = defaultState,action) => {
    switch(action.type){
      case "CHANGE_ALGO":
        return {
          ...state, selectedAlgo: action.payload
        }
      case "SET_ENCRYPTED_DATA":
        return {
          ...state, encRes:action.payload
        }
      default:
        return state
    }
  }