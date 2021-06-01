import { algsData } from "../consts/constants";

const defaultState = {
    selectedAlgo : algsData.AES,
    encRes: 'd',
    decRes: 'a'
  }
 export const reducer =  (state = defaultState,action) => {
    switch(action.type){
      case "CHANGE_ALGO":
        return {
          ...state, selectedAlgo: action.payload
        }
      case "SET_ENCRYPTED_DATA":
        return {
          ...state, encRes:action.payload.encData
        }
      case "SET_DECRYPTED_DATA":
        return {
          ...state, decRes:action.payload.decData
        }
      default:
        return state
    }
  }