import './styles.css'
import { useDispatch,useSelector } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import  Button  from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import FileDownload from '../FileDownload';
import { encryptData } from '../../redux/asyncReq/request';

export const Encrypt = ({btnColor,mode}) => {
    const dispatch = useDispatch();
    const algo = useSelector(state => state.selectedAlgo);
    const encRes = useSelector(state => state.encRes);
    console.log(encRes);
    const [userText,setUserText] = useState('');
    const [userKey,setUserKey] = useState('');
    const [keyLen,setKeyLen] = useState('');
    const sendData = () => {
            dispatch(encryptData())
    }
    const onUserTextChange = (e) => {
        setUserText(e.target.value)
    }
    const onUserKeyChange = (e) => {
        setUserText(e.target.value)
    }
    const keyList = algo.keySizes.map((el)=><MenuItem key={el} value={el}>{el}  bit</MenuItem>)
    return(
        <div className = 'mainEncWrapper'>
            <div className='elemWrapper'>
                <h2>{mode}</h2>
                <TextField id="outlined-basic" label="Enter text " variant="outlined" onChange = {onUserTextChange}  className='textF' />
                <p>OR</p>
                <FileDownload btnColor={btnColor}/>
                <InputLabel id="demo-simple-select-label">KeyLenth</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="EncKeySelect"
                    variant="outlined"
                    className="SelectW"
                    onChange = {(e)=>{setKeyLen(e.target.value)}}
                >
                    {keyList}
                </Select>
                <TextField id="outlined-basic" label="Enter key " variant="outlined" onChange={onUserKeyChange} className='textF'/>
                <div className = 'btnWrapper'>
                    <Button color={btnColor} variant="contained" component="span" onClick = {sendData} >Encrypt</Button>
                </div>
                <p>{algo.name} enctyption output</p>
                <TextareaAutosize aria-label="empty textarea" placeholder="Empty" value={encRes.encData} />
            </div>
        </div>
    )
}