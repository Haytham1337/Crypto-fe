import './App.css';
import InfoBlock from './Components/InfoBlock';
import Encrypt from './Components/Encrypt';


function App() {

  return (
    <div className="App">
    <h1>Online Symetric Encryptor</h1>
      <div className="mainWrapper">
        <InfoBlock/>
        <div className='encDecWrapper'>
           <Encrypt btnColor = {'primary'} mode={'Encrypt'}/>
           <div className="verticalLine"></div>
           <Encrypt btnColor = {'secondary'} mode={'Decrypt'}/>
        </div>
      </div>
    </div>
  );
}

export default App;
