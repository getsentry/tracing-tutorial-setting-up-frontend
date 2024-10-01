import logo from './logo.svg';
import alexPic from './img/alex.jpg'
import './App.css';

import { useState } from 'react';


function App() {

  const [data, setData] = useState(null);

  
  // function getKittenMittens() {
  //   fetch('http://localhost:3001/products/kitten-mittens/')
  //     .then(response => (console.log('response',response)))
  //     .then(response => response.json())
  //     .then(response => (console.log('jsonresponse', response)))
  //     .then(json => setData(json))
  //     .then(console.log('data', data))
  //     .catch(error => console.error(error));
  // }

  async function getProduct(slug) {
    const url = `http://localhost:3001/products/${slug}/`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log('json', json);
      setData(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={alexPic} className="App-logo" alt="logo" />
        <div className='btn-container'>
          <button className='btn' onClick={() => getProduct('kitten-mittens')}>Kitten Mittens</button>
          <button className='btn' onClick={() => getProduct('doggles')}>Doggles</button>
          <button className='btn' onClick={() => getProduct('clown-shoes')}>Clown Shoes</button>
          <button className='btn' onClick={() => getProduct('debug-sentry')}>Nonfat Water</button>
        </div>
        <p>
          This is a React App
        </p>
        <p>data</p>
        
      </header>
    </div>
  );
}

export default App;

