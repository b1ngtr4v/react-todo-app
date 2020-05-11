import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import ThirdComponent from './components/ThirdComponent'
import Counter from './components/counter/Counter'

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

class LearningComponents extends Component {
  render() {
    return (
      <div className="learning">
        Hello World!
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </div>
    );
  }
}

export default App;
