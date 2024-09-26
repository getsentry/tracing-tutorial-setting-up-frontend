import logo from './logo.svg';
import alexPic from './img/alex.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={alexPic} className="App-logo" alt="logo" />
        <div className='btn-container'>
          <button className='btn'>This is a button</button>
          <button className='btn'>This is a button</button>
          <button className='btn'>This is a button</button>
          <button className='btn'>This is a button</button>
        </div>
        <p>
          This is a React App
        </p>
        
      </header>
    </div>
  );
}

export default App;
