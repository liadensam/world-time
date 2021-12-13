import React, {useState} from 'react';
import { render } from 'react-dom';
import './style.css';
import WorldTime from './components/WorldTime'

const App = () => {
  const [zone, setZone] = useState("Asia/Hong_Kong");

  const changeZone = (zone) => {
    setZone(zone);
  }

  return (
    <>
      <h1>{zone}</h1>
      <WorldTime zone={zone} onZoneChange={changeZone} />
    </>
  )
    
};

render(<App />, document.querySelector('#app'));