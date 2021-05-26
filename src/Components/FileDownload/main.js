import { useState } from 'react';
import { useDispatch } from "react-redux";
import  Button  from '@material-ui/core/Button';
import { encryptData } from '../../redux/asyncReq/request';


export const FileDownload = () => {
    const dispatch = useDispatch();
    const [fileName,setFileName] = useState(null);

    const sendData = () => {
        console.log('click');
        const a = {
            "text": "message i want to enctypt",
            "keyLen": 16
            }
            dispatch(encryptData(a))
    }

    const onDownloadChange = (e) =>{
        setFileName(e.target.files[0].name);
        if(e.target.files === 0) {
            return
        }
        let reader = new FileReader();
        reader.onload = (e) => {
            const file = e.target.result;
            console.log(typeof(file));
        }
        reader.readAsText(e.target.files[0])
    }
    return(
        <div>
            <label htmlFor="upload-photo" >
                <input style={{ display: 'none' }}  type="file" id="upload-photo" name="upload-photo" onChange={onDownloadChange}/>
                <Button color="primary" variant="contained" component="span">Upload button</Button>
            </label>
            <div>{fileName}</div>
            <div>
                <Button color="primary" variant="contained" component="span" onClick= {sendData}>ENC</Button>
            </div>
        </div>
    )
}
