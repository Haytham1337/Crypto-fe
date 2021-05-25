import { useDispatch,useSelector } from "react-redux";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { algsData } from '../../consts/constants';
import { changeAlgo } from '../../redux/actions/actions';


export const InfoBlock = () => {
    const dispatch = useDispatch();
    const algo = useSelector(state => state.selectedAlgo);

    const onBntChange = (algName) =>{
        dispatch(changeAlgo(algsData[algName]))
    }

    return(
        <div>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                <Button onClick={()=>onBntChange('AES')}>AES</Button>
                <Button onClick={()=>onBntChange('DES')}>DES</Button>
                <Button onClick={()=>onBntChange('BLOWFISH')}>BlowFish</Button>
            </ButtonGroup>
            <div>
                {algo.name}
            </div>
        </div>
    )
}