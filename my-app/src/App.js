import logo from './logo.svg';
import './App.css';
import {Card} from './Card';
import React,  {  useState } from 'react';
function App() {

  const [name, setName] = useState(' Adam');
 
  
  return (
    <div className="App">
      <Card name={name} />
    </div>
  );
}

export default App;
