import { CHANGE_ALGO } from "./consts";
import { ENCRYPT } from "./consts";

export const changeAlgo = (payload) => ({type:CHANGE_ALGO,payload:payload})
export const encryptText = (payload) => ({type:ENCRYPT,payload:payload})