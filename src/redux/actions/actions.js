import { CHANGE_ALGO } from "./consts";
import { ENCRYPT } from "./consts";
import { SET_ENCRYPTED_DATA } from "./consts";


export const changeAlgo = (payload) => ({type:CHANGE_ALGO,payload:payload})
export const encryptText = (payload) => ({type:ENCRYPT,payload:payload})
export const setEncData = (payload) => ({type:SET_ENCRYPTED_DATA,payload:payload})