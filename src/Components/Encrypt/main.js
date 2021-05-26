import './styles.css'
import { useDispatch,useSelector } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useState } from 'react';

import FileDownload from '../FileDownload'

export const Encrypt = () => {
    const dispatch = useDispatch();
    const algo = useSelector(state => state.selectedAlgo);
    const [userText,setUserText] = useState('')

    const onInputChange = (e) => {
        setUserText(e.target.value)
        console.log(e.target.value);
    }
    const keyList = algo.keySizes.map((el)=><MenuItem key={el} value={el}>{el}  bit</MenuItem>)
    return(
        <div className = 'mainEncWrapper'>
            <TextField id="outlined-basic" label="Enter text " variant="outlined" onChange = {onInputChange}/>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="EncKeySelect"
                    variant="outlined"
                >
                    {keyList}
                </Select>
                <FileDownload/>
        </div>
    )
}