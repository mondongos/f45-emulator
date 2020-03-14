import React from 'react';
import './App.css';
import Workout from './pages/workout';
import Menu from './components/menu';


function App() {
  return (
    <div className="App">
      <Menu/>
      <Workout/>
    </div>
  );
}

export default App;
