import { useState } from 'react';
import  Button  from '@material-ui/core/Button';


export const FileDownload = () => {

    const [fileName,setFileName] = useState(null);

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
        </div>
    )
}
