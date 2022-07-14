import React from 'react'
import Stars from './Components/Stars';
import './styles/App.css'

function App() {

  return (
    <div className="App">
      <Stars count={1} />
      <Stars count={2} />
      <Stars count={6} />
      <Stars count={4} />
      <Stars count={'h'} />
    </div>
  );
}

export default App;
