import React, {useState} from 'react';
import './App.css';
import FComponent from './FComponent';

function App() {
  const [flag, setFlag] = useState(true)
  return (
    <div className='App'>
        <div>
          <button onClick={()=> setFlag(!flag)}>Toggle Class component</button>
        </div>
        {flag ? <FComponent/> : <FComponent/>}
    </div>
  );
}

export default App;
