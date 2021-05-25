import { algsData } from "../consts/constants";

const defaultState = {
    selectedAlgo : algsData.AES
  }
 export const reducer =  (state = defaultState,action) => {
    switch(action.type){
      case "CHANGE_ALGO":
        return {
          ...state, selectedAlgo: action.payload
        }
      default:
        return state
    }
  }