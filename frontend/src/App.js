import StrategyMode from './strategy_mode';

import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'


function App() {

  const [isLoading, setLoading] = useState(true);
  const [getMessage, setGetMessage] = useState({})

  useEffect(()=>{
    axios.get('http://localhost:5000/').then(response => {  
      
      setGetMessage(response.data)
      setLoading(false)      

    }).catch(error => {
      console.log('There is a error')
      console.log(error)
    })

  }, [])

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  var strategy_modes = Object.entries(getMessage).map(([idx, value]) => {return  <StrategyMode key={idx} component_key={idx} title={idx} data={value} />  })

  return (
    <div>
      <header></header>
      <main>
      <div className='row'>
        {strategy_modes}        
        </div>
      </main>
      <footer></footer>
    </div>
    
    
  );
}

export default App;
