import { setEncData } from '../actions/actions';
export const encryptData = encData => {

    return async(dispatch) => {
            let response = await fetch('http://127.0.0.1:5000/blowfishenc', {
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