import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button'
import Title from './components/Title'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title>Title</Title>
        <Button style={{ marginBottom: 8 }} bgColor="red">Button</Button>
        <Button bgColor="blue">Button</Button>
      </header>
    </div>
  );
}

export default App;
