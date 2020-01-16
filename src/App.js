import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './FunctionalComponent'
import ClassComponent from './ClassComponent'
import Counter from './Counter'

function App() {
  const usernames=['Kartik','Vanshit','Nikunj','Harhul']
  return (
    <div style={{textAlign:"center"}}>
      {usernames.map((a,i) => <Greetings key={a} username={a} time='Morning' index={i}/>)}
      <Greetings username={'Kartik'}/>
      <Greetings username={'Vanshit'}/>
      <ClassComponent />
      <Counter />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
