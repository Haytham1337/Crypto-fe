import './App.css';
import InfoBlock from './Components/InfoBlock';
import Encrypt from './Components/Encrypt';


function App() {

  return (
    <div className="App">
      <div className="mainWrapper">
        <InfoBlock/>
        <div className='encDecWrapper'>
           <Encrypt btnColor = {'primary'}/>
           <div class="verticalLine"></div>
           <Encrypt btnColor = {'secondary'}/>
        </div>
      </div>
    </div>
  );
}

export default App;
