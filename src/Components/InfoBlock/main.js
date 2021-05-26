import { useDispatch,useSelector } from "react-redux";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { algsData } from '../../consts/constants';
import { changeAlgo } from '../../redux/actions/actions';
import './styles.css';


export const InfoBlock = () => {
    const dispatch = useDispatch();
    const algo = useSelector(state => state.selectedAlgo);

    const onBntChange = (algName) =>{
        dispatch(changeAlgo(algsData[algName]))
    }

    return(
        <div className='infoWrapper'>
            <div className='bntGroup'>
                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                    <Button onClick={()=>onBntChange('AES')} className='btnWidth'>AES</Button>
                    <Button onClick={()=>onBntChange('DES')} className='btnWidth'>DES</Button>
                    <Button onClick={()=>onBntChange('BLOWFISH')} className='btnWidth'>BlowFish</Button>
                </ButtonGroup>
            </div>
            <div className='textInfo'>
                {algo.shortInfo}
            </div>
        </div>
    )
}