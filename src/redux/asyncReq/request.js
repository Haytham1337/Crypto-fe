import { setEncData } from '../actions/actions';
import { setDecData } from '../actions/actions';
export const encryptData = (encData,name) => {

    return async(dispatch) => {
            let response = await fetch(`http://127.0.0.1:5000/${name}enc`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(encData)
            });
            const res = await response.json();
            dispatch(setEncData(res))
    }
}

export const decryptData = (encData,name) => {

    return async(dispatch) => {
            let response = await fetch(`http://127.0.0.1:5000/${name}dec`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(encData)
            });
            const res = await response.json();
            dispatch(setDecData(res))
    }
}